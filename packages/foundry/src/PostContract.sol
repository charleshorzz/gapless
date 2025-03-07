// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PostContract is Ownable {
        struct Post {
        uint256 id;
        address owner;
        string postData; // Store all data in JSON format
        uint256 tipsReceived;
        bool active;
    }

        struct PostInput {
        address owner;
        string postData; //  JSON string containing all post details
    }

    struct ChatRequest {
        address requester;
        uint256 amount; // Amount sent with request
        bool accepted;
    }

    IERC20 public token; // ERC20 token for tipping (optional)
    uint256 public postCount;
    
    mapping(uint256 => Post) public posts;
    mapping(uint256 => ChatRequest[]) public chatRequests; // Post ID -> Chat requests
    mapping(address => uint256) public reputation; // Track reputation scores

   event PostCreated(
    uint256 id,
    address owner,
    string postData, // Store all details in JSON format
    address indexed author,
    uint256 timestamp
    );
    event Tipped(uint256 postId, address sender, uint256 amount);
    event ChatRequested(uint256 postId, address requester, uint256 amount);
    event ChatAccepted(uint256 postId, address requester);
    event ChatRejected(uint256 postId, address requester);

    constructor(address _token) Ownable(msg.sender) {
        token = IERC20(_token); // Set ERC20 token for tipping (set `address(0)` for native ETH)
    }

    /**
     * @dev Create a new post
     */
    function createPost(PostInput memory postData) public {
    postCount++;
    posts[postCount] = Post(
        postCount,
        postData.owner,
        postData.postData, // 🔥 Store all details in JSON
        0,  // tipsReceived starts at 0
        true // active post
    );

    emit PostCreated(postCount, postData.owner, postData.postData, msg.sender, block.timestamp);
    }


    /**
     * @dev Send a tip to the post owner
     */
    function tipPost(uint256 _postId, uint256 _amount) external {
        Post storage post = posts[_postId];
        require(post.active, "Post not active");
        require(post.owner != msg.sender, "Cannot tip yourself");

        token.transferFrom(msg.sender, post.owner, _amount);
        post.tipsReceived += _amount;
        reputation[post.owner] += _amount; // Increase reputation
        
        emit Tipped(_postId, msg.sender, _amount);
    }

    /**
     * @dev Request a chat with the post owner by sending tokens
     */
    function requestChat(uint256 _postId, uint256 _amount) external {
        Post storage post = posts[_postId];
        require(post.active, "Post not active");
        require(post.owner != msg.sender, "Cannot request chat with yourself");

        token.transferFrom(msg.sender, address(this), _amount);
        chatRequests[_postId].push(ChatRequest(msg.sender, _amount, false));

        emit ChatRequested(_postId, msg.sender, _amount);
    }

    /**
     * @dev Accept a chat request
     */
    function acceptChat(uint256 _postId, address _requester) external {
        Post storage post = posts[_postId];
        require(post.owner == msg.sender, "Only owner can accept chat");

        ChatRequest[] storage requests = chatRequests[_postId];
        for (uint i = 0; i < requests.length; i++) {
            if (requests[i].requester == _requester && !requests[i].accepted) {
                requests[i].accepted = true;
                token.transfer(post.owner, requests[i].amount); // Transfer tokens to owner
                emit ChatAccepted(_postId, _requester);
                return;
            }
        }
        revert("Chat request not found");
    }

    /**
     * @dev Reject a chat request
     */
    function rejectChat(uint256 _postId, address _requester) external {
        Post storage post = posts[_postId];
        require(post.owner == msg.sender, "Only owner can reject chat");

        ChatRequest[] storage requests = chatRequests[_postId];
        for (uint i = 0; i < requests.length; i++) {
            if (requests[i].requester == _requester && !requests[i].accepted) {
                token.transfer(requests[i].requester, requests[i].amount); // Refund
                delete requests[i];
                emit ChatRejected(_postId, _requester);
                return;
            }
        }
        revert("Chat request not found");
    }

    /**
     * @dev Get all chat requests for a post
     */
    function getChatRequests(uint256 _postId) external view returns (ChatRequest[] memory) {
        return chatRequests[_postId];
    }
}
