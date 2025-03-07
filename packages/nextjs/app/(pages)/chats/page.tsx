"use client";

import { WrongNetworkDropdown } from "../../../components/scaffold-eth/RainbowKitCustomConnectButton/WrongNetworkDropdown";
import AuthBackground from "../_components/AuthBackground";
import ChatLists from "./ChatLists";
import ChatWindow from "./ChatWindow";
import PaymentEHT from "./PaymentEHT";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AnimatePresence } from "framer-motion";
import { useNetworkColor, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useChatHistoryStoredsQuery, useGetChatHistorysQuery } from "~~/libs/generated/graphql";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const ChatsPage = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();

  //  Nedd to modify here later (for mobile)
  const openChat = false;

  // ETH Pay logic start here
  const paymentETH = false;

  //Function
  const postId = "0xa076ee052ed47040b1010736558a1d26d9d6f8c7eef65824706308f162d4b8a403000000";
  const postOwnerAddress = "0xb785058f9807b0cb7a67f7bb58d6a5234b7d6656";
  const chatPrice = 10000000000000;
  const userWalletAddress = "0xb785058f9807b0cb7a67f7bb58d6a5234b7d6656";

  //Fetch chat history of user
  const { data: chatHistory } = useGetChatHistorysQuery({
    variables: {
      walletAddress: userWalletAddress,
    },
  });

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(targetNetwork, account.address)
          : undefined;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <AuthBackground>
                    {/* <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button> */}
                    <button
                      className="btn btn-warning bg-white text-black border-[#e5e5e5] rounded-md "
                      onClick={openConnectModal}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-gitlab"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
                      </svg>
                      Connect Wallet
                    </button>
                  </AuthBackground>
                );
              }

              if (chain.unsupported || chain.id !== targetNetwork.id) {
                return <WrongNetworkDropdown />;
              }

              return (
                <div className="grid grid-cols-6 gap-5 h-full">
                  {/* ChatLists: Always visible, takes 2/5 columns on lg+ */}
                  {!openChat && (
                    <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                      <ChatLists />
                    </div>
                  )}

                  {/* ChatWindow: Hidden below lg, takes 3/5 columns on lg+ */}
                  <div className="hidden lg:block lg:col-span-4">
                    {chatHistory ? (
                      <PaymentEHT postId={postId} chatPrice={chatPrice} postOwnerAddress={postOwnerAddress} />
                    ) : (
                      <ChatWindow />
                    )}
                  </div>

                  {openChat && (
                    <div className="col-span-6">
                      <AnimatePresence>
                        <ChatWindow />
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ChatsPage;
