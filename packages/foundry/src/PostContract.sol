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
        uint256 chatPrice;
        bool active;
    }

        struct PostInput {
        address owner;
        string postData; //  JSON string containing all post details
        uint256 chatPrice;
    }

    struct ChatRequest {
        address requester;
        uint256 amount; // Amount sent with request
        bool accepted;
    }

    struct ChatSession {
        bool paid;
        string ipfsHash;
    }

    IERC20 public token; // ERC20 token for tipping (optional)
    uint256 public postCount;
    
    mapping(uint256 => Post) public posts;
    mapping(uint256 => mapping(address => ChatSession)) public chatSessions; // PostID -> User -> ChatSession
    mapping(uint256 => ChatRequest[]) public chatRequests; // Post ID -> Chat requests
    mapping(address => uint256) public reputation; // Track reputation scores

   event PostCreated(
    uint256 id,
    address owner,
    string postData, // Store all details in JSON format
    uint256 chatPrice,
    address indexed author,
    uint256 timestamp
    );
    event ChatRequested(uint256 postId, address requester, uint256 amount);
    event ChatHistoryStored(uint256 postId, address requester, string ipfsHash);

    constructor(address _token) Ownable(msg.sender) {
        token = IERC20(_token); // Set ERC20 token for tipping (set `address(0)` for native ETH)
    }

    /**
     * @dev Create a new post
     */
    function createPost(PostInput memory postData, uint256 _chatPrice) public {
    postCount++;
    posts[postCount] = Post(
        postCount,
        postData.owner,
        postData.postData, // 🔥 Store all details in JSON
        0,  // tipsReceived starts at 0
        _chatPrice,
        true // active post
    );

    emit PostCreated(postCount, postData.owner, postData.postData, _chatPrice, msg.sender, block.timestamp);
    }

    function requestChat(uint256 _postId) external {
        Post storage post = posts[_postId];
        require(post.active, "Post not active");
        require(post.owner != msg.sender, "Cannot request chat with yourself");
        require(!chatSessions[_postId][msg.sender].paid, "Already paid");

        token.transferFrom(msg.sender, post.owner, post.chatPrice);
        chatSessions[_postId][msg.sender].paid = true;

        emit ChatRequested(_postId, msg.sender, post.chatPrice);
    }

    function storeChatHistory(uint256 _postId, string memory _ipfsHash) external {
        require(chatSessions[_postId][msg.sender].paid, "Chat not paid for");
        chatSessions[_postId][msg.sender].ipfsHash = _ipfsHash;

        emit ChatHistoryStored(_postId, msg.sender, _ipfsHash);
    }

    function getChatHistory(uint256 _postId, address _user) external view returns (string memory) {
        require(chatSessions[_postId][_user].paid, "No chat history found");
        return chatSessions[_postId][_user].ipfsHash;
    }
}
