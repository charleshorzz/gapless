/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    YourContract: {
      address: "0x76ff489d15590e63779fe5124807c670e4846d7c",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userGreetingCounter",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
      deploymentFile: "run-1741369626.json",
      deploymentScript: "Deploy.s.sol",
    },
    PostContract: {
      address: "0x620329b732e3c1543b2ac6368cca305c74395a66",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_token",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "chatSessions",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "paid",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "ipfsHash",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createPost",
          inputs: [
            {
              name: "_postData",
              type: "string",
              internalType: "string",
            },
            {
              name: "_chatPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_postComment",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getChatHistory",
          inputs: [
            {
              name: "_participant",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "postCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "posts",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
            {
              name: "postData",
              type: "string",
              internalType: "string",
            },
            {
              name: "tipsReceived",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "chatPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postComment",
              type: "string",
              internalType: "string",
            },
            {
              name: "active",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "requestChat",
          inputs: [
            {
              name: "_postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "storeChatHistory",
          inputs: [
            {
              name: "_receiver",
              type: "address",
              internalType: "address",
            },
            {
              name: "_ipfsHash",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "token",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "ChatHistoryStored",
          inputs: [
            {
              name: "sender",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "receiver",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "ipfsHash",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ChatRequested",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "receiver",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "PostCreated",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "owner",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postData",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "chatPrice",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "postComment",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
      ],
      inheritedFunctions: {},
      deploymentFile: "run-1741350624.json",
      deploymentScript: "DeployPostContract.sol",
    },
  },
  534351: {
    PostContract: {
      address: "0x91f85824e727d7561eac0dc31dbddcd22c392098",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_token",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "chatSessions",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "paid",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "ipfsHash",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createPost",
          inputs: [
            {
              name: "_postData",
              type: "string",
              internalType: "string",
            },
            {
              name: "_chatPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_postComment",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getChatHistory",
          inputs: [
            {
              name: "_participant",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "postCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "posts",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
            {
              name: "postData",
              type: "string",
              internalType: "string",
            },
            {
              name: "tipsReceived",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "chatPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postComment",
              type: "string",
              internalType: "string",
            },
            {
              name: "active",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "requestChat",
          inputs: [
            {
              name: "_postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "storeChatHistory",
          inputs: [
            {
              name: "_receiver",
              type: "address",
              internalType: "address",
            },
            {
              name: "_ipfsHash",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "token",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IERC20",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "ChatHistoryStored",
          inputs: [
            {
              name: "sender",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "receiver",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "ipfsHash",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ChatRequested",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "receiver",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "PostCreated",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "owner",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postData",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "chatPrice",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "postComment",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
        },
      ],
      inheritedFunctions: {},
      deploymentFile: "run-1741369697.json",
      deploymentScript: "DeployPostContract.sol",
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
