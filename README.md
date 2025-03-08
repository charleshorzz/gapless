## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/foundry/foundry.toml`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/script` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`

Run smart contract test with `yarn foundry:test`

- Edit your smart contracts in `packages/foundry/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/foundry/script`

## Scroll Track

Verified contract address: 0x91F85824E727d7561eac0DC31DBdDCd22c392098

[Link To Scrollscan](https://sepolia.scrollscan.com/address/0x91f85824e727d7561eac0dc31dbddcd22c392098)

## The Graph Track

[Link To Deployed Subgraph](https://api.studio.thegraph.com/query/105777/gaplessv10/version/latest)

1. Initiate Apollo Client in nextjs/app.layout.tsx:

```
const graphqlEndpoint = "https://api.studio.thegraph.com/query/105777/gaplessv10/v0.0.1";

const client = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});
```

2. Wrote query in index.graphql:

```
query postCreateds($first: Int, $skip: Int) {
  postCreateds(first: $first, skip: $skip) {
    id
    author
    postData
    owner
    blockNumber
    chatPrice
    blockTimestamp
    internal_id
  }
}
```

3. Run command in nextjs directory to generate types:

```
cd nextjs
yarn generate:graphql
```

4. Example of querying in frontend

```
const [chatHistoryStoreds, { loading }] = useChatHistoryStoredsLazyQuery({
    variables: {
      where: {
        receiver: postOwnerAddress,
        sender: userWalletAddress,
      },
    },
    onCompleted: data => {
      if (data.chatHistoryStoreds.length > 0) {
        setChatFound(true);
        setFoundChatMessage(data.chatHistoryStoreds[0]);
      }
    },
  });
```
