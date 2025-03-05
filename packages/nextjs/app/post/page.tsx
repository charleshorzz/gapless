"use client";

import type { NextPage } from "next";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// export const metadata = getMetadata({
//   title: "Create Post",
//   description: "Create a new post",
// });

const Post: NextPage = () => {
  // Function
  const { writeContractAsync: writePostContractAsync } = useScaffoldWriteContract({ contractName: "PostContract" });

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Create a post</h1>
        <button
          className="btn btn-primary"
          onClick={async () => {
            try {
              await writePostContractAsync({
                functionName: "createPost",
                args: ["IPFS Hash"],
              });
            } catch (e) {
              console.error("Error setting greeting:", e);
            }
          }}
        >
          Create Post
        </button>
      </div>
    </>
  );
};

export default Post;
