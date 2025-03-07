"use client";

import React from "react";
import { useRouter } from "next/navigation";

// const jobData: Job[] = [
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
//   {
//     role: "Senior QA Engineer",
//     industry: "Fintech",
//     location: "Kuala Lumpur",
//     profile: "Male, Malay, 30",
//     qualification: "Bachelor's degree",
//     salary: "USD 115,000",
//     address: "0xw...490",
//   },
// ];

const postData: Post[] = [
  {
    address: "0xw...490",
    content: "123",
    images: [],
  },
  {
    address: "0xw...491",
    content: "123",
    images: [],
  },
  {
    address: "0xw...492",
    content: "123",
    images: [],
  },
  {
    address: "0xw...493",
    content: "123",
    images: [],
  },
  {
    address: "0xw...494",
    content: "123",
    images: [],
  },
  {
    address: "0xw...495",
    content: "123",
    images: [],
  },
  {
    address: "0xw...496",
    content: "123",
    images: [],
  },
  {
    address: "0xw...497",
    content: "123",
    images: [],
  },
];

interface Job {
  images: string[];
}

interface Post {
  address: string;
  content: string;
  images: string[];
}

interface JobListProps {
  searchTerm: string;
}

const JobCard = ({ post, postId }: { post: Post; postId: number }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${postId}`);
  };

  return (
    <div
      className="relative w-80 h-80 border rounded-lg shadow-lg p-4 flex flex-col items-center"
      onClick={handleClick}
    >
      {/* <div className="absolute left-[-25px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm font-bold">
        QA Engineer
      </div>
      <div className="w-56 h-60 border p-2 text-sm">
        <p>Role: {job.role}</p>
        <p>Industry: {job.industry}</p>
        <p>Location: {job.location}</p>
        <p>Profile: {job.profile}</p>
        <p>Qualification: {job.qualification}</p>
        <p className="mt-2 font-semibold">{job.salary}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="w-full flex justify-between items-center mt-4 border-t pt-2">
        <span className="text-lg">⬤</span>
        <span className="text-sm font-mono">{job.address}</span>
      </div> */}
      <div>{post.images}</div>
    </div>
  );
};

const JobList: React.FC<JobListProps> = ({ searchTerm }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 px-20">
      {postData.map((post, index) => (
        <JobCard key={index} post={post} postId={index} />
      ))}
    </div>
  );
};

export default JobList;
