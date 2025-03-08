"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { WrongNetworkDropdown } from "../../../components/scaffold-eth/RainbowKitCustomConnectButton/WrongNetworkDropdown";
import AuthBackground from "../_components/AuthBackground";
import ChatLists from "./ChatLists";
import ChatWindow from "./ChatWindow";
import NoChat from "./NoChat";
import PaymentEHT from "./PaymentEHT";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AnimatePresence, motion } from "framer-motion";
import { set } from "react-hook-form";
import { useAccount } from "wagmi";
import { useOpenStore } from "~~/app/store";
import { useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import {
  useChatHistoryStoredsLazyQuery,
  useChatHistoryStoredsQuery,
  useGetChatHistorysQuery,
} from "~~/libs/generated/graphql";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const ChatsPage = () => {
  const networkColor = useNetworkColor();
  const { targetNetwork } = useTargetNetwork();
  const [isChatFound, setChatFound] = useState(false);
  const [foundChatMessage, setFoundChatMessage] = useState();
  const [chatHistory, setChatHistory] = useState([]);
  const { openChat } = useOpenStore();
  const searchParams = useSearchParams();
  const { address: userWalletAddress } = useAccount();

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
  const dummmyData = [
    {
      blockNumber: "8426649",
      id: "0x16bbc84ffacf9b172febf2d5b4e32e56a2c48b4ee578df53ad1a58bc1f02718d00000000",
      ipfsHash: "bafkreihbbaeniolv3raaomifgodijh4gj4ux43cpoum4haht3oxxaz5iia",
      sender: "0xb785058f9807b0cb7a67f7bb58d6a5234b7d6656",
      receiver: "0x6b7090baf7674bd83c8b89629fddb7ff3523ad09",
      transactionHash: "0x16bbc84ffacf9b172febf2d5b4e32e56a2c48b4ee578df53ad1a58bc1f02718d",
      blockTimestamp: "1741374040",
    },
    {
      blockNumber: "8427235",
      id: "0x31fecbd7bf58c5954a2fce4ce14d9237043a294ab6092af95ab90fa1690c7a0500000000",
      ipfsHash: "bafkreihbbaeniolv3raaomifgodijh4gj4ux43cpoum4haht3oxxaz5iia",
      sender: "0x8c4dbda7926c2df8b381ff1ab666e8ddbf66dc9f",
      receiver: "0x6b7090baf7674bd83c8b89629fddb7ff3523ad09",
      transactionHash: "0x31fecbd7bf58c5954a2fce4ce14d9237043a294ab6092af95ab90fa1690c7a05",
      blockTimestamp: "1741378277",
    },
    {
      blockNumber: "8427223",
      id: "0x98b54d95ed1b9b2753e28cf615b3fdcb102bc8b2914224a07b7146daa0169f2000000000",
      ipfsHash: "bafkreihbbaeniolv3raaomifgodijh4gj4ux43cpoum4haht3oxxaz5iia",
      sender: "0x7fca54fb24fef161e152ad6711d7fbeff2c83034",
      receiver: "0x6b7090baf7674bd83c8b89629fddb7ff3523ad09",
      transactionHash: "0x98b54d95ed1b9b2753e28cf615b3fdcb102bc8b2914224a07b7146daa0169f20",
      blockTimestamp: "1741378200",
    },
  ];
  // ETH Pay logic start here
  const paymentETH = false;
  //Function
  const postId = searchParams.get("postId");
  const postOwnerAddress = searchParams.get("postOwnerAddress");
  const chatPrice = searchParams.get("chatPrice");

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
  //query from router params, check getchatRequests, pass in owner address and user address, if found, setchatfound to true
  // setchatfound to true, show paymentETH component
  useEffect(() => {
    if (postOwnerAddress && userWalletAddress) {
      chatHistoryStoreds();
    }
  }, [postOwnerAddress, userWalletAddress]);

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
                  <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                    <ChatLists chatHistory={dummmyData} />
                  </div>
                  {/* {!mobileChatLogic &&
                    (chatHistory.length > 0 ? (
                      <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                        <ChatLists chatHistory={chatHistory} />
                      </div>
                    ) : (
                      <div className="col-span-6 lg:col-span-2 overflow-y-scroll">
                        <NoChat />
                      </div>
                    ))} */}

                  {/* ChatWindow: Hidden below lg, takes 3/5 columns on lg+ */}
                  <div className="hidden lg:block lg:col-span-4">
                    {isChatFound ? (
                      <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col">
                        <ChatWindow chatMessage={foundChatMessage} />
                      </div>
                    ) : (
                      <PaymentEHT
                        postId={BigInt(postId ?? "0")}
                        chatPrice={chatPrice ?? 0}
                        postOwnerAddress={postOwnerAddress ?? ""}
                        setChatFound={setChatFound}
                      />
                    )}
                  </div>

                  {/* ChatWindow: Hidden below lg, takes 3/5 columns on lg+ */}
                  {mobileChatLogic && (
                    <div className="block lg:hidden col-span-6">
                      {isChatFound ? (
                        <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col">
                          <ChatWindow />
                        </div>
                      ) : (
                        <PaymentEHT
                          postId={BigInt(postId ?? "0")}
                          chatPrice={chatPrice ?? 0}
                          postOwnerAddress={postOwnerAddress ?? ""}
                          setChatFound={setChatFound}
                        />
                      )}
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
