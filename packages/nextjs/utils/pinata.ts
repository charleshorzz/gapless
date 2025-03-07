import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,
  pinataGateway: "example-gateway.mypinata.cloud",
});

/**
 * Uploads a file to Pinata (IPFS).
 * @param file - A File object to upload
 * @returns CID of the uploaded file
 */
export async function uploadFileToIPFS(file: File): Promise<string | null> {
  try {
    const { IpfsHash } = await pinata.upload.file(file);
    console.log("File uploaded to IPFS:", IpfsHash);
    return IpfsHash;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    return null;
  }
}

export async function uploadChatHistoryToIPFS(chatHistory: object[]): Promise<string | null> {
  try {
    const jsonBlob = new Blob([JSON.stringify(chatHistory)], { type: "application/json" });
    const file = new File([jsonBlob], "chatHistory.json");

    const { IpfsHash } = await pinata.upload.file(file);
    console.log("Chat history uploaded to IPFS:", IpfsHash);
    return IpfsHash;
  } catch (error) {
    console.error("Error uploading chat history to IPFS:", error);
    return null;
  }
}

/**
 * Fetches data from IPFS using a given CID.
 * @param cid - IPFS CID (Content Identifier)
 * @returns Data stored in IPFS
 */
export async function fetchDataFromIPFS(cid: string): Promise<any> {
  try {
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json(); // Use `.json()` if storing JSON data
    console.log("Fetched from IPFS:", data);
    return data;
  } catch (error) {
    console.error("Error fetching from IPFS:", error);
    return null;
  }
}
