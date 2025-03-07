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

  // Only show these fields
  const visibleFields = {
    jobTitle: parsedData.jobTitle || "Untitled Position",
    experience: parsedData.experience,
    education: parsedData.education,
    seniority: parsedData.seniority,
    salary: parsedData.baseSalary ? `RM ${parsedData.baseSalary}` : "Not disclosed",
    industry: parsedData.industry,
    companyType: parsedData.companyType,
  };

  return (
    <div
      className="relative w-80 h-96 border border-gray-200 rounded-xl bg-white p-6 flex flex-col cursor-pointer hover:shadow-lg transition-all"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      {/* Job Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{visibleFields.jobTitle}</h3>

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <DetailItem label="Experience" value={visibleFields.experience} />
          <DetailItem label="Education" value={visibleFields.education} />
          <DetailItem label="Seniority" value={visibleFields.seniority} />
        </div>
        <div className="space-y-1">
          <div className="bg-blue-50 p-3 rounded-lg">
            <span className="text-sm font-semibold text-blue-700 block">Monthly Salary</span>
            <span className="text-lg font-bold text-blue-900">{visibleFields.salary}</span>
          </div>
        </div>
      </div>

      {/* Industry & Company Type */}
      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          {visibleFields.industry && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{visibleFields.industry}</span>
          )}
          {visibleFields.companyType && (
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              {visibleFields.companyType}
            </span>
          )}
        </div>

        {/* Author Footer */}
        <div className="w-full flex items-center gap-2 pt-4 border-t border-gray-100">
          <BlockieAvatar address={post.author} size={24} />
          <span className="text-sm text-gray-600 font-medium">
            {post.author.slice(0, 6)}...{post.author.slice(-4)}
          </span>
        </div>
      </div>
    </div>
  );
};

// Reusable detail component
const DetailItem = ({ label, value }: { label: string; value?: string }) => (
  <div>
    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</span>
    <p className="text-gray-900 font-medium line-clamp-1">{value || "-"}</p>
  </div>
);

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
    variables: {},
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
