import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChatHistoryStored,
  ChatRequested,
  OwnershipTransferred,
  PostCreated
} from "../generated/PostContract/PostContract"

export function createChatHistoryStoredEvent(
  postId: BigInt,
  sender: Address,
  receiver: Address,
  ipfsHash: string
): ChatHistoryStored {
  let chatHistoryStoredEvent = changetype<ChatHistoryStored>(newMockEvent())

  chatHistoryStoredEvent.parameters = new Array()

  chatHistoryStoredEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  chatHistoryStoredEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  chatHistoryStoredEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  chatHistoryStoredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )

  return chatHistoryStoredEvent
}

export function createChatRequestedEvent(
  postId: BigInt,
  requester: Address,
  amount: BigInt
): ChatRequested {
  let chatRequestedEvent = changetype<ChatRequested>(newMockEvent())

  chatRequestedEvent.parameters = new Array()

  chatRequestedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  chatRequestedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  chatRequestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return chatRequestedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPostCreatedEvent(
  id: BigInt,
  owner: Address,
  postData: string,
  chatPrice: BigInt,
  author: Address,
  timestamp: BigInt
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("postData", ethereum.Value.fromString(postData))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "chatPrice",
      ethereum.Value.fromUnsignedBigInt(chatPrice)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return postCreatedEvent
}
