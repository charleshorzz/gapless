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
<<<<<<< HEAD

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
=======
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
>>>>>>> 80de8e14e6020f74557fbb5d2b027c788dc580bb
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
  const { data, loading, error, fetchMore } = usePostCreatedsQuery({
<<<<<<< HEAD
    variables: {},
=======
    variables: {
      orderBy: "blockTimestamp",
      page: 1,
      perPage: 6,
      search: searchTerm,
    },
>>>>>>> 80de8e14e6020f74557fbb5d2b027c788dc580bb
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
