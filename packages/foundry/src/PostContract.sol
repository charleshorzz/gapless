// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PostContract is Ownable {
    struct Post {
        uint256 id;
        address owner;
        address author;
        string postData;
        uint256 tipsReceived;
        uint256 chatPrice;
        string postComment; // IPFS hash for comments
        bool active;
    }

    struct ChatSession {
        bool paid;
        string ipfsHash;
    }

    IERC20 public token;
    uint256 public postCount;
    mapping(uint256 => Post) public posts;
    mapping(address => mapping(address => ChatSession)) public chatSessions; // chatOwner -> chatReceiver -> ChatSession

    event PostCreated(
        uint256 id, 
        address owner, 
        string postData, 
        uint256 chatPrice, 
        string postComment, 
        address indexed author, 
        uint256 timestamp
    );
    event ChatRequested(uint256 postId, address requester, address receiver, uint256 amount);
    event ChatHistoryStored(address sender, address receiver, string ipfsHash);

    constructor(address _token) Ownable(msg.sender) {
        token = IERC20(_token);
    }

   function createPost(string memory _postData, uint256 _chatPrice, string memory _postComment) public {
    postCount++;
    posts[postCount] = Post(
        postCount,
        msg.sender,
        msg.sender, // Assign author here
        _postData,
        0,
        _chatPrice,
        _postComment,
        true
    );
    emit PostCreated(postCount, msg.sender, _postData, _chatPrice, _postComment, msg.sender, block.timestamp);
    }

  function requestChat(uint256 _postId) external payable {
    Post storage post = posts[_postId];
    require(post.author != msg.sender, "Cannot request chat with yourself");
    require(!chatSessions[post.author][msg.sender].paid, "Already paid");
    require(msg.value >= post.chatPrice, "Incorrect ETH sent");

    // Transfer Ether
    payable(post.author).transfer(msg.value);

    chatSessions[post.author][msg.sender].paid = true;
    chatSessions[msg.sender][post.author].paid = true;

    emit ChatRequested(_postId, msg.sender, post.author, post.chatPrice);
    }

    function storeChatHistory(address _receiver, string memory _ipfsHash) external {
        require(chatSessions[msg.sender][_receiver].paid, "Chat not paid for");

        chatSessions[msg.sender][_receiver].ipfsHash = _ipfsHash;
        chatSessions[_receiver][msg.sender].ipfsHash = _ipfsHash;

        emit ChatHistoryStored(msg.sender, _receiver, _ipfsHash);
    }

    function getChatHistory(address _participant) external view returns (string memory) {
        require(
            chatSessions[msg.sender][_participant].paid || chatSessions[_participant][msg.sender].paid,
            "No chat history found"
        );
        
        return bytes(chatSessions[msg.sender][_participant].ipfsHash).length > 0 
            ? chatSessions[msg.sender][_participant].ipfsHash 
            : chatSessions[_participant][msg.sender].ipfsHash;
    }
}
