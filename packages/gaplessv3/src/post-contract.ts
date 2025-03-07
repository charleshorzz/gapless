import {
  ChatHistoryStored as ChatHistoryStoredEvent,
  ChatRequested as ChatRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PostCreated as PostCreatedEvent
} from "../generated/PostContract/PostContract"
import {
  ChatHistoryStored,
  ChatRequested,
  OwnershipTransferred,
  PostCreated
} from "../generated/schema"

export function handleChatHistoryStored(event: ChatHistoryStoredEvent): void {
  let entity = new ChatHistoryStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.requester = event.params.requester
  entity.ipfsHash = event.params.ipfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChatRequested(event: ChatRequestedEvent): void {
  let entity = new ChatRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.requester = event.params.requester
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.internal_id = event.params.id
  entity.owner = event.params.owner
  entity.postData = event.params.postData
  entity.chatPrice = event.params.chatPrice
  entity.author = event.params.author
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
