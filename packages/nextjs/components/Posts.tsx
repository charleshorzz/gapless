"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { usePostCreatedsQuery } from "~~/libs/generated/graphql";
import { splitTextIntoChunks } from "~~/utils/scaffold-eth/textSplitter";

// ... (keep JobCard component the same)
interface Post {
  id: string;
  author: string;
  postData: string;
}

interface JobListProps {
  searchTerm: string;
}

const JobCard = ({ post }: { post: Post }) => {
  const router = useRouter();
  const parsedData = post.postData ? JSON.parse(post.postData) : {};
  const storyChunks = splitTextIntoChunks(parsedData.story || "");
  const firstChunk = storyChunks[0] || "";

  return (
    <div
      className=" w-80 max-h-[310px] border rounded-lg shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <div className="flex-1 overflow-hidden">
        {Object.entries(parsedData).map(([key, value]) => {
          if (key === "story") return null;
          return (
            <div key={key} className="mb-2">
              <span className="font-semibold">{key}:</span>{" "}
              <span className="whitespace-pre-wrap">{value as string}</span>
            </div>
          );
        })}{" "}
        <div className="mb-2">
          <span className="font-semibold">story:</span>{" "}
          <div className="whitespace-pre-wrap line-clamp-4">
            {firstChunk}
            {storyChunks.length > 1 && <span className="text-blue-500 ml-2">[...]</span>}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-4 border-t pt-2">
        <BlockieAvatar address={post.author} size={24} />
        <span className="text-sm font-mono">{post.author.slice(0, 6) + "..." + post.author.slice(-4)}</span>
      </div>
    </div>
  );
};

const JobList: React.FC<JobListProps> = ({ searchTerm }) => {
  const { data, loading, error, fetchMore } = usePostCreatedsQuery({
    variables: {
      orderBy: "blockTimestamp",
      page: 1,
      perPage: 6,
      search: searchTerm,
    },
    fetchPolicy: "network-only",
  });

  if (loading && !data?.postCreateds) return <div className="text-center p-4">Loading initial posts...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 px-20">
      {data?.postCreateds?.map(
        (
          post, // Add optional chaining here
        ) => (
          <JobCard
            key={post.id}
            post={{
              ...post,
              postData: post.postData || "{}",
              id: post.id || "",
            }}
          />
        ),
      )}
    </div>
  );
};

export default JobList;
