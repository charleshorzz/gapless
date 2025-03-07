import React from "react";
import { formatEther, keccak256, parseEther, toHex } from "viem";
import { erc20Abi } from "viem";
import { useContractWrite } from "wagmi";
import CustomCard from "~~/app/CustomCard";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { uploadFileToIPFS } from "~~/utils/pinata";

const PaymentEHT = ({
  postId,
  chatPrice,
  postOwnerAddress,
  setChatFound,
}: {
  postId: bigint;
  chatPrice: bigint;
  postOwnerAddress: string;
  setChatFound: Function;
}) => {
  // Receive of Pay
  const pay = true;
  const newChatPrice = formatEther(chatPrice);
  const { writeContractAsync: writePostContractAsync } = useScaffoldWriteContract({
    contractName: "PostContract",
  });

  //Call Smart Contract
  const handleSubmit = async () => {
    // Call Smart Contract
    console.log("Sample Smart Contract Call");
    console.log("postId:", postId, "Type:", typeof postId);

    try {
      // Request Chat
      const data = await writePostContractAsync({
        functionName: "requestChat",
        args: [postId],
        value: chatPrice,
      });
      console.log("data:", data);
      if (data) {
        const chatHistory = [{}];
        const chatHistoryJSON = JSON.stringify(chatHistory);
        const chatHistoryBlob = new Blob([chatHistoryJSON], { type: "application/json" });
        const chatHistoryFile = new File([chatHistoryBlob], "chatHistory.json");
        const chatHistoryIpfsHash = await uploadFileToIPFS(chatHistoryFile);
        console.log("chatHistoryIpfsHash:", chatHistoryIpfsHash);

        if (chatHistoryIpfsHash) {
          await writePostContractAsync({
            functionName: "storeChatHistory",
            args: [postOwnerAddress, chatHistoryIpfsHash],
          });
        }
        setChatFound(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (pay)
    return (
      <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800">
        <button onClick={handleSubmit} className="btn btn-outline btn-warning rounded-md w-fit mb-3">
          Pay {newChatPrice} ETH
        </button>
        <h1 className="text-sm text-neutral-600 dark:text-neutral-400">to start the conversation</h1>
      </div>
    );

  return (
    <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800">
      <p className="text-neutral-600 dark:text-neutral-400">
        User <span className="text-orange-300  font-bold">Owda...123</span> had paid{" "}
        <span className="text-orange-300     font-bold">0.001 ETH</span> to request for conversation
      </p>
      <div className="flex gap-x-3">
        <button className="btn btn-soft btn-warning rounded-md w-[100px] mb-3">Accept</button>
        <button className="btn btn-ghost  hover:bg-red-400 rounded-md w-[100px] mb-3">Deny</button>
      </div>
    </div>
  );
};

export default PaymentEHT;
