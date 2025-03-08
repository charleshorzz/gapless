"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { OrderDirection, PostCreated_OrderBy, usePostCreatedsQuery } from "~~/libs/generated/graphql";
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
      className="relative w-80 h-full sm:max-w-none sm:w-auto mx-auto border rounded-xl p-3 flex flex-col cursor-pointer hover:shadow-lg transition-all border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 dark:hover:bg-neutral-700"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      {/* Job Title */}
      <h3 className="text-xl font-bold mb-4 line-clamp-2">{visibleFields.jobTitle}</h3>

      {/* Key Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <DetailItem label="Experience" value={visibleFields.experience} />
          <DetailItem label="Education" value={visibleFields.education} />
          <DetailItem label="Seniority" value={visibleFields.seniority} />
        </div>
        <div className="space-y-1">
          <div className="bg-blue-50 p-1 rounded-lg text-center">
            <span className="text-sm text-blue-700 block">Monthly Salary</span>
            <span className="sm:text-lg font-bold text-blue-900">{visibleFields.salary}</span>
          </div>
        </div>
      </div>

      {/* Industry & Company Type */}
      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          {visibleFields.industry && (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-full">
              {visibleFields.industry}
            </span>
          )}
          {visibleFields.companyType && (
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs sm:text-sm rounded-full">
              {visibleFields.companyType}
            </span>
          )}
        </div>

        {/* Author Footer */}
        <div className="w-full flex items-center gap-2 pt-4 border-t border-gray-100">
          <BlockieAvatar address={post.author} size={24} />
          <span className="text-sm font-medium">
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
    <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
    <p className="font-medium line-clamp-1">{value || "-"}</p>
  </div>
);

// In JobList component
const JobList: React.FC<JobListProps> = ({ searchTerm }) => {
  const { data, loading, error, fetchMore } = usePostCreatedsQuery({
    variables: {
      orderBy: PostCreated_OrderBy.BlockTimestamp,
      orderDirection: OrderDirection.Desc,
    },
    fetchPolicy: "network-only",
  });

  // Filter posts client-side as fallback
  const filteredPosts = data?.postCreateds?.filter((post: Post) => {
    try {
      const parsed = JSON.parse(post.postData);
      return parsed.jobTitle?.toLowerCase().startsWith(searchTerm.toLowerCase());
    } catch {
      return true;
    }
  });

  if (loading && !data?.postCreateds) return null;
  if (error) return <div className="text-red-500 p-4">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 xl:px-20 ">
      {filteredPosts?.length ? (
        filteredPosts.map((post: Post) => (
          <JobCard
            key={post.id}
            post={{
              ...post,
              postData: post.postData || "{}",
              id: post.id || "",
            }}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-base sm:text-lg md:text-xl">No relevant posts found</p>
        </div>
      )}
    </div>
  );
};

export default JobList;
