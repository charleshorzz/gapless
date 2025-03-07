import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ChatHistoryStored } from "../generated/schema"
import { ChatHistoryStored as ChatHistoryStoredEvent } from "../generated/PostContract/PostContract"
import { handleChatHistoryStored } from "../src/post-contract"
import { createChatHistoryStoredEvent } from "./post-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let postId = BigInt.fromI32(234)
    let requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ipfsHash = "Example string value"
    let newChatHistoryStoredEvent = createChatHistoryStoredEvent(
      postId,
      requester,
      ipfsHash
    )
    handleChatHistoryStored(newChatHistoryStoredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChatHistoryStored created and stored", () => {
    assert.entityCount("ChatHistoryStored", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChatHistoryStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "postId",
      "234"
    )
    assert.fieldEquals(
      "ChatHistoryStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requester",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ChatHistoryStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
