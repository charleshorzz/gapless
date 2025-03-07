import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChatAccepted,
  ChatRejected,
  ChatRequested,
  OwnershipTransferred,
  PostCreated,
  Tipped
} from "../generated/PostContract/PostContract"

export function createChatAcceptedEvent(
  postId: BigInt,
  requester: Address
): ChatAccepted {
  let chatAcceptedEvent = changetype<ChatAccepted>(newMockEvent())

  chatAcceptedEvent.parameters = new Array()

  chatAcceptedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  chatAcceptedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return chatAcceptedEvent
}

export function createChatRejectedEvent(
  postId: BigInt,
  requester: Address
): ChatRejected {
  let chatRejectedEvent = changetype<ChatRejected>(newMockEvent())

  chatRejectedEvent.parameters = new Array()

  chatRejectedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  chatRejectedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return chatRejectedEvent
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

export function createTippedEvent(
  postId: BigInt,
  sender: Address,
  amount: BigInt
): Tipped {
  let tippedEvent = changetype<Tipped>(newMockEvent())

  tippedEvent.parameters = new Array()

  tippedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  tippedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  tippedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tippedEvent
}
