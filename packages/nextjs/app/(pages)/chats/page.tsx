"use client";

import { useEffect, useState } from "react";
import { WrongNetworkDropdown } from "../../../components/scaffold-eth/RainbowKitCustomConnectButton/WrongNetworkDropdown";
import AuthBackground from "../_components/AuthBackground";
import ChatLists from "./ChatLists";
import ChatWindow from "./ChatWindow";
import PaymentEHT from "./PaymentEHT";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AnimatePresence, motion } from "framer-motion";
import { set } from "react-hook-form";
import { useOpenStore } from "~~/app/store";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useChatHistoryStoredsQuery, useGetChatHistorysQuery } from "~~/libs/generated/graphql";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const ChatsPage = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();
  const [isChatFound, setChatFound] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const { openChat } = useOpenStore();

  // State to track screen size
  const [desktopScreen, setDesktopScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDesktopScreen(window.matchMedia("(min-width: 64rem)").matches);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Mobile chat logic: true if `openChat` is true and `desktopScreen` is false
  const mobileChatLogic = openChat && !desktopScreen;

  // ETH Pay logic start here
  const paymentETH = false;

  //query from router params, check getchatRequests, pass in owner address and user address, if found, setchatfound to true
  // setchatfound to true, show paymentETH component

  //Function
  const postId = "6";
  const postOwnerAddress = "0x6b7090Baf7674bd83C8b89629FdDB7fF3523Ad09";
  const chatPrice = 10000000000000;
  const userWalletAddress = "0xb785058f9807b0cb7a67f7bb58d6a5234b7d6656";

  //Fetch chat history of user
  const { data } = useGetChatHistorysQuery({
    variables: {
      walletAddress: userWalletAddress,
    },
    onCompleted: data => {
      console.log("chatHistory:", data);
      setChatHistory(data.chatHistoryStoreds);
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
                  {chatHistory.length > 0 ? (
                    <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                      <ChatLists />
                    </div>
                  ) : (
                    <div className="col-span-6 lg:col-span-2 overflow-y-scroll">No Chat History Found</div>
                  )}

                  {/* ChatWindow: Hidden below lg, takes 3/5 columns on lg+ */}
                  <div className="hidden lg:block lg:col-span-4">
                    {isChatFound ? (
                      <ChatWindow />
                    ) : (
                      <PaymentEHT
                        postId={BigInt(postId)}
                        chatPrice={chatPrice}
                        postOwnerAddress={postOwnerAddress}
                        setChatFound={setChatFound}
                      />
                    )}
                  </div>
                  {!mobileChatLogic && (
                    <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                      <ChatLists />
                    </div>
                  )}

                  {/* ChatWindow: Hidden below lg, takes 3/5 columns on lg+ */}
                  <div className="hidden lg:block lg:col-span-4">
                    {paymentETH ? (
                      <PaymentEHT
                        postId={BigInt(postId)}
                        chatPrice={chatPrice}
                        postOwnerAddress={postOwnerAddress}
                        setChatFound={setChatFound}
                      />
                    ) : (
                      <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col">
                        {" "}
                        <ChatWindow />{" "}
                      </div>
                    )}
                  </div>

                  {mobileChatLogic && (
                    <div className="block lg:hidden col-span-6">
                      {/* Come animate effect error here */}
                      {/* <AnimatePresence>
                          <motion.div
                            initial={{ x: "20%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }} className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col"
                            >
                              <ChatWindow />
                          </motion.div>
                        </AnimatePresence> */}
                      <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col">
                        <ChatWindow />
                      </div>
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
