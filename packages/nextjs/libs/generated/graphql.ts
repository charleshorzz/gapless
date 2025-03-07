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

export type ChatAccepted = {
  __typename?: 'ChatAccepted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postId: Scalars['BigInt']['output'];
  requester: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChatAccepted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChatAccepted_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<ChatAccepted_Filter>>>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ChatAccepted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PostId = 'postId',
  Requester = 'requester',
  TransactionHash = 'transactionHash'
}

export type ChatRejected = {
  __typename?: 'ChatRejected';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postId: Scalars['BigInt']['output'];
  requester: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ChatRejected_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ChatRejected_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<ChatRejected_Filter>>>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ChatRejected_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PostId = 'postId',
  Requester = 'requester',
  TransactionHash = 'transactionHash'
}

export type ChatRequested = {
  __typename?: 'ChatRequested';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postId: Scalars['BigInt']['output'];
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
  id: Scalars['Bytes']['output'];
  internal_id: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
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
  Id = 'id',
  InternalId = 'internal_id',
  Owner = 'owner',
  PostData = 'postData',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  chatAccepted?: Maybe<ChatAccepted>;
  chatAccepteds: Array<ChatAccepted>;
  chatRejected?: Maybe<ChatRejected>;
  chatRejecteds: Array<ChatRejected>;
  chatRequested?: Maybe<ChatRequested>;
  chatRequesteds: Array<ChatRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
  tipped?: Maybe<Tipped>;
  tippeds: Array<Tipped>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryChatAcceptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChatAcceptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatAccepted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatAccepted_Filter>;
};


export type QueryChatRejectedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChatRejectedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatRejected_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatRejected_Filter>;
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


export type QueryTippedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTippedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tipped_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tipped_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  chatAccepted?: Maybe<ChatAccepted>;
  chatAccepteds: Array<ChatAccepted>;
  chatRejected?: Maybe<ChatRejected>;
  chatRejecteds: Array<ChatRejected>;
  chatRequested?: Maybe<ChatRequested>;
  chatRequesteds: Array<ChatRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
  tipped?: Maybe<Tipped>;
  tippeds: Array<Tipped>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionChatAcceptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChatAcceptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatAccepted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatAccepted_Filter>;
};


export type SubscriptionChatRejectedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChatRejectedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChatRejected_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ChatRejected_Filter>;
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


export type SubscriptionTippedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTippedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tipped_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tipped_Filter>;
};

export type Tipped = {
  __typename?: 'Tipped';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postId: Scalars['BigInt']['output'];
  sender: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Tipped_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<Tipped_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Tipped_Filter>>>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  postId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not?: InputMaybe<Scalars['BigInt']['input']>;
  postId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum Tipped_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PostId = 'postId',
  Sender = 'sender',
  TransactionHash = 'transactionHash'
}

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