import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatHistoryStored = {
  __typename?: 'ChatHistoryStored';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  ipfsHash: Scalars['String']['output'];
  receiver: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChatHistoryStored_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChatHistoryStored_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ChatHistoryStored_Filter>>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChatHistoryStored_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  Receiver = 'receiver',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

export type ChatRequested = {
  __typename?: 'ChatRequested';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postId: Scalars['BigInt']['output'];
  receiver: Scalars['Bytes']['output'];
  requester: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChatRequested_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ChatRequested_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ChatRequested_Filter>>>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requester?: InputMaybe<Scalars['Bytes']['input']>;
  requester_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requester_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requester_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requester_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requester_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requester_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requester_not?: InputMaybe<Scalars['Bytes']['input']>;
  requester_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requester_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ChatRequested_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PostId = 'postId',
  Receiver = 'receiver',
  Requester = 'requester',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type PostCreated = {
  __typename?: 'PostCreated';
  author: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chatPrice: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  internal_id: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  postComment: Scalars['String']['output'];
  postData: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PostCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PostCreated_Filter>>>;
  author?: InputMaybe<Scalars['Bytes']['input']>;
  author_contains?: InputMaybe<Scalars['Bytes']['input']>;
  author_gt?: InputMaybe<Scalars['Bytes']['input']>;
  author_gte?: InputMaybe<Scalars['Bytes']['input']>;
  author_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  author_lt?: InputMaybe<Scalars['Bytes']['input']>;
  author_lte?: InputMaybe<Scalars['Bytes']['input']>;
  author_not?: InputMaybe<Scalars['Bytes']['input']>;
  author_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  author_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chatPrice?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chatPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  chatPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  internal_id?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  internal_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  internal_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PostCreated_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postComment?: InputMaybe<Scalars['String']['input']>;
  postComment_contains?: InputMaybe<Scalars['String']['input']>;
  postComment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postComment_ends_with?: InputMaybe<Scalars['String']['input']>;
  postComment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postComment_gt?: InputMaybe<Scalars['String']['input']>;
  postComment_gte?: InputMaybe<Scalars['String']['input']>;
  postComment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postComment_lt?: InputMaybe<Scalars['String']['input']>;
  postComment_lte?: InputMaybe<Scalars['String']['input']>;
  postComment_not?: InputMaybe<Scalars['String']['input']>;
  postComment_not_contains?: InputMaybe<Scalars['String']['input']>;
  postComment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postComment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  postComment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postComment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postComment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  postComment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postComment_starts_with?: InputMaybe<Scalars['String']['input']>;
  postComment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postData?: InputMaybe<Scalars['String']['input']>;
  postData_contains?: InputMaybe<Scalars['String']['input']>;
  postData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postData_ends_with?: InputMaybe<Scalars['String']['input']>;
  postData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postData_gt?: InputMaybe<Scalars['String']['input']>;
  postData_gte?: InputMaybe<Scalars['String']['input']>;
  postData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postData_lt?: InputMaybe<Scalars['String']['input']>;
  postData_lte?: InputMaybe<Scalars['String']['input']>;
  postData_not?: InputMaybe<Scalars['String']['input']>;
  postData_not_contains?: InputMaybe<Scalars['String']['input']>;
  postData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  postData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  postData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postData_starts_with?: InputMaybe<Scalars['String']['input']>;
  postData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PostCreated_OrderBy {
  Author = 'author',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChatPrice = 'chatPrice',
  Id = 'id',
  InternalId = 'internal_id',
  Owner = 'owner',
  PostComment = 'postComment',
  PostData = 'postData',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  chatHistoryStored?: Maybe<ChatHistoryStored>;
  chatHistoryStoreds: Array<ChatHistoryStored>;
  chatRequested?: Maybe<ChatRequested>;
  chatRequesteds: Array<ChatRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryChatHistoryStoredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChatHistoryStoredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatHistoryStored_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatHistoryStored_Filter>;
};


export type QueryChatRequestedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChatRequestedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatRequested_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatRequested_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryPostCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPostCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostCreated_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  chatHistoryStored?: Maybe<ChatHistoryStored>;
  chatHistoryStoreds: Array<ChatHistoryStored>;
  chatRequested?: Maybe<ChatRequested>;
  chatRequesteds: Array<ChatRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionChatHistoryStoredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChatHistoryStoredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatHistoryStored_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatHistoryStored_Filter>;
};


export type SubscriptionChatRequestedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChatRequestedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatRequested_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatRequested_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionPostCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPostCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostCreated_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PostCreatedsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostCreatedsQuery = { __typename?: 'Query', postCreateds: Array<{ __typename?: 'PostCreated', id: any, author: any, postData: string, owner: any, blockNumber: any, blockTimestamp: any }> };

export type ChatRequestedsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ChatRequestedsQuery = { __typename?: 'Query', chatRequesteds: Array<{ __typename?: 'ChatRequested', id: any, amount: any, postId: any, requester: any }> };

export type ChatHistoryStoredsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ChatHistoryStoredsQuery = { __typename?: 'Query', chatHistoryStoreds: Array<{ __typename?: 'ChatHistoryStored', id: any, blockNumber: any, blockTimestamp: any, ipfsHash: string, receiver: any, sender: any }> };

export type GetChatHistorysQueryVariables = Exact<{
  walletAddress: Scalars['Bytes']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetChatHistorysQuery = { __typename?: 'Query', chatHistoryStoreds: Array<{ __typename?: 'ChatHistoryStored', id: any, sender: any, receiver: any, ipfsHash: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> };


export const PostCreatedsDocument = gql`
    query postCreateds($first: Int, $skip: Int) {
  postCreateds(first: $first, skip: $skip) {
    id
    author
    postData
    owner
    blockNumber
    blockTimestamp
  }
}
    `;

/**
 * __usePostCreatedsQuery__
 *
 * To run a query within a React component, call `usePostCreatedsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCreatedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCreatedsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePostCreatedsQuery(baseOptions?: Apollo.QueryHookOptions<PostCreatedsQuery, PostCreatedsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCreatedsQuery, PostCreatedsQueryVariables>(PostCreatedsDocument, options);
      }
export function usePostCreatedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCreatedsQuery, PostCreatedsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCreatedsQuery, PostCreatedsQueryVariables>(PostCreatedsDocument, options);
        }
export function usePostCreatedsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostCreatedsQuery, PostCreatedsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostCreatedsQuery, PostCreatedsQueryVariables>(PostCreatedsDocument, options);
        }
export type PostCreatedsQueryHookResult = ReturnType<typeof usePostCreatedsQuery>;
export type PostCreatedsLazyQueryHookResult = ReturnType<typeof usePostCreatedsLazyQuery>;
export type PostCreatedsSuspenseQueryHookResult = ReturnType<typeof usePostCreatedsSuspenseQuery>;
export type PostCreatedsQueryResult = Apollo.QueryResult<PostCreatedsQuery, PostCreatedsQueryVariables>;
export const ChatRequestedsDocument = gql`
    query chatRequesteds($first: Int, $skip: Int) {
  chatRequesteds(first: $first, skip: $skip) {
    id
    amount
    postId
    requester
  }
}
    `;

/**
 * __useChatRequestedsQuery__
 *
 * To run a query within a React component, call `useChatRequestedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRequestedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRequestedsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useChatRequestedsQuery(baseOptions?: Apollo.QueryHookOptions<ChatRequestedsQuery, ChatRequestedsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatRequestedsQuery, ChatRequestedsQueryVariables>(ChatRequestedsDocument, options);
      }
export function useChatRequestedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRequestedsQuery, ChatRequestedsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatRequestedsQuery, ChatRequestedsQueryVariables>(ChatRequestedsDocument, options);
        }
export function useChatRequestedsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChatRequestedsQuery, ChatRequestedsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChatRequestedsQuery, ChatRequestedsQueryVariables>(ChatRequestedsDocument, options);
        }
export type ChatRequestedsQueryHookResult = ReturnType<typeof useChatRequestedsQuery>;
export type ChatRequestedsLazyQueryHookResult = ReturnType<typeof useChatRequestedsLazyQuery>;
export type ChatRequestedsSuspenseQueryHookResult = ReturnType<typeof useChatRequestedsSuspenseQuery>;
export type ChatRequestedsQueryResult = Apollo.QueryResult<ChatRequestedsQuery, ChatRequestedsQueryVariables>;
export const ChatHistoryStoredsDocument = gql`
    query chatHistoryStoreds($first: Int, $skip: Int) {
  chatHistoryStoreds(first: $first, skip: $skip) {
    id
    blockNumber
    blockTimestamp
    ipfsHash
    receiver
    sender
  }
}
    `;

/**
 * __useChatHistoryStoredsQuery__
 *
 * To run a query within a React component, call `useChatHistoryStoredsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatHistoryStoredsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatHistoryStoredsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useChatHistoryStoredsQuery(baseOptions?: Apollo.QueryHookOptions<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>(ChatHistoryStoredsDocument, options);
      }
export function useChatHistoryStoredsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>(ChatHistoryStoredsDocument, options);
        }
export function useChatHistoryStoredsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>(ChatHistoryStoredsDocument, options);
        }
export type ChatHistoryStoredsQueryHookResult = ReturnType<typeof useChatHistoryStoredsQuery>;
export type ChatHistoryStoredsLazyQueryHookResult = ReturnType<typeof useChatHistoryStoredsLazyQuery>;
export type ChatHistoryStoredsSuspenseQueryHookResult = ReturnType<typeof useChatHistoryStoredsSuspenseQuery>;
export type ChatHistoryStoredsQueryResult = Apollo.QueryResult<ChatHistoryStoredsQuery, ChatHistoryStoredsQueryVariables>;
export const GetChatHistorysDocument = gql`
    query getChatHistorys($walletAddress: Bytes!, $first: Int, $skip: Int) {
  chatHistoryStoreds(
    first: $first
    skip: $skip
    where: {or: [{sender: $walletAddress}, {receiver: $walletAddress}]}
  ) {
    id
    sender
    receiver
    ipfsHash
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;

/**
 * __useGetChatHistorysQuery__
 *
 * To run a query within a React component, call `useGetChatHistorysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatHistorysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatHistorysQuery({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetChatHistorysQuery(baseOptions: Apollo.QueryHookOptions<GetChatHistorysQuery, GetChatHistorysQueryVariables> & ({ variables: GetChatHistorysQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatHistorysQuery, GetChatHistorysQueryVariables>(GetChatHistorysDocument, options);
      }
export function useGetChatHistorysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatHistorysQuery, GetChatHistorysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatHistorysQuery, GetChatHistorysQueryVariables>(GetChatHistorysDocument, options);
        }
export function useGetChatHistorysSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChatHistorysQuery, GetChatHistorysQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatHistorysQuery, GetChatHistorysQueryVariables>(GetChatHistorysDocument, options);
        }
export type GetChatHistorysQueryHookResult = ReturnType<typeof useGetChatHistorysQuery>;
export type GetChatHistorysLazyQueryHookResult = ReturnType<typeof useGetChatHistorysLazyQuery>;
export type GetChatHistorysSuspenseQueryHookResult = ReturnType<typeof useGetChatHistorysSuspenseQuery>;
export type GetChatHistorysQueryResult = Apollo.QueryResult<GetChatHistorysQuery, GetChatHistorysQueryVariables>;