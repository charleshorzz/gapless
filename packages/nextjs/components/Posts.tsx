"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { usePostCreatedsQuery } from "~~/libs/generated/graphql";
import { splitTextIntoChunks } from "~~/utils/scaffold-eth/textSplitter";

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
  console.log(parsedData);
  const storyChunks = splitTextIntoChunks(parsedData.story || "");
  const firstChunk = storyChunks[0] || "";

  return (
    <div
      className="relative w-80 max-h-[310px] border rounded-lg shadow-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {Object.entries(parsedData).map(([key, value]) => {
          if (key === "story") return null;

          return (
            <div key={key} className="mb-2">
              <span className="font-semibold">{key}:</span>{" "}
              <span className="whitespace-pre-wrap">{value as string}</span>
            </div>
          );
        })}

        {/* Story Preview */}
        <div className="mb-2">
          <span className="font-semibold">story:</span>{" "}
          <div className="whitespace-pre-wrap line-clamp-4">
            {firstChunk}
            {storyChunks.length > 1 && <span className="text-blue-500 ml-2">[...]</span>}
          </div>
        </div>
      </div>

      {/* Author Footer */}
      <div className="w-full flex justify-between items-center mt-4 border-t pt-2">
        <BlockieAvatar address={post.author} size={24} />
        <span className="text-sm font-mono">{post.author.slice(0, 6) + "..." + post.author.slice(-4)}</span>
      </div>
    </div>
  );
};

const JobList: React.FC<JobListProps> = ({ searchTerm }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  // const usePosts = (query: Post) => useInfiniteQuery<Post[]>({
  //   querykey: ['posts', query],
  //   queryFn: ()
  // })

  const { data, loading, error, fetchMore } = usePostCreatedsQuery({
    variables: {
      orderBy: "blockTimestamp",
    },
    fetchPolicy: "network-only",
  });

  // Initial load
  useEffect(() => {
    if (data?.postCreateds) {
      setPosts(data.postCreateds);
      setHasMore(data.postCreateds.length >= 6);
    }
  }, [data]);

  // Load more when scrolled to bottom
  useEffect(() => {
    if (inView && hasMore && !loading) {
      const nextPage = page + 1;
      fetchMore({
        variables: {
          page: nextPage,
          perPage: 6,
          search: searchTerm,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.postCreateds.length) {
            setHasMore(false);
            return prev;
          }

          setPage(nextPage);
          setPosts(prevPosts => [...prevPosts, ...fetchMoreResult.postCreateds]);
          setHasMore(fetchMoreResult.postCreateds.length >= 6);

          return {
            postCreateds: [...prev.postCreateds, ...fetchMoreResult.postCreateds],
          };
        },
      });
    }
  }, [inView, loading, hasMore, page, fetchMore, searchTerm]);

  if (loading && posts.length === 0) return <div className="text-center p-4">Loading initial posts...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 px-20">
      {posts.map(post => (
        <JobCard
          key={post.id}
          post={{
            ...post,
            postData: post.postData || "{}",
            id: post.id || "",
          }}
        />
      ))}

      {/* Loading trigger */}
      <div ref={ref} className="col-span-full text-center py-4">
        {loading && <span>Loading more jobs...</span>}
        {!hasMore && posts.length > 0 && <span>All jobs loaded</span>}
      </div>
    </div>
  );
};

export default JobList;
