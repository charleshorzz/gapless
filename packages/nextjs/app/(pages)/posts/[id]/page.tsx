"use client";

import React, { useEffect, useState } from "react";
import { IconCheck, IconCircle, IconSend } from "@tabler/icons-react";
import { TextSlider } from "~~/components/TextSlider";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { usePostCreatedsQuery } from "~~/libs/generated/graphql";
import { splitTextIntoChunks } from "~~/utils/scaffold-eth/textSplitter";

interface Props {
  params: { id: string };
}

interface Comment {
  user: string;
  text: string;
}

const JobDetail = ({ params }: Props) => {
  const [comments, setComments] = useState<Comment[]>([
    { user: "0wd...5345", text: "Some Comment here" },
    { user: "0wd...5346", text: "Another Comment here" },
  ]);

  const [newComment, setNewComment] = useState("");
  const { data } = usePostCreatedsQuery();
  const post = data?.postCreateds.find(p => p.id === params.id);
  const parsedData = post?.postData ? JSON.parse(post.postData) : {};

  const PersonalDetailsPage = ({ data }: { data: Record<string, any> }) => (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {["age", "gender", "ethnicity", "jobTitle", "seniority", "experience", "industry"].map(key => (
          <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 capitalize font-bold">{key}:</span>
            <span className="text-gray-800 text-sm">{data[key] || "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SalaryConditionsPage = ({ data }: { data: Record<string, any> }) => (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      {/* ... payslip banner ... */}
      {parsedData.payslip && (
        <div className="bg-green-100 p-3 rounded-lg flex items-center text-sm text-green-700 mb-4">
          <IconCheck className="h-4 w-4 mr-2" />
          Payslip verified
        </div>
      )}
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Salary Conditions</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          "companyName",
          "companyType",
          "employmentType",
          "location",
          "baseSalary",
          "otherCompensation",
          "allowance",
          "bonus",
          "commission",
          "stock",
        ].map(key => (
          <div
            key={key}
            className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg ${
              ["companyName", "companyType"].includes(key) ? "col-span-2" : ""
            }`}
          >
            <span className="font-bold text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
            <span
              className={`text-gray-800 ${
                ["companyName", "companyType"].includes(key)
                  ? "text-sm break-words max-w-[400px] text-right"
                  : "text-sm"
              }`}
            >
              {typeof data[key] === "number" ? `RM ${data[key]}` : data[key] || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const personalDetails = Object.fromEntries(
    Object.entries(parsedData).filter(([key]) =>
      ["age", "gender", "ethnicity", "jobTitle", "seniority", "experience", "industry"].includes(key),
    ),
  );

  const salaryConditions = Object.fromEntries(
    Object.entries(parsedData).filter(([key]) =>
      [
        "companyName",
        "companyType",
        "employmentType",
        "location",
        "baseSalary",
        "otherCompensation",
        "allowance",
        "bonus",
        "commission",
        "stock",
      ].includes(key),
    ),
  );

  // Create story chunks
  const storyChunks = parsedData.story
    ? splitTextIntoChunks(parsedData.story).map((chunk, index) => (
        <div
          key={`story-${index}`}
          className="prose-lg max-w-3xl px-4 py-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="space-y-4">
            {index === 0 && (
              <span className="float-left text-6xl font-bold mr-2 -mt-2 text-gray-700">{chunk.charAt(0)}</span>
            )}
            <p className="text-gray-700 leading-relaxed tracking-wide text-justify">
              {index === 0 ? chunk.slice(1) : chunk}
            </p>
            {index !== 0 && <div className="border-l-4 border-blue-200 pl-4 italic text-gray-600">{chunk}</div>}
          </div>
        </div>
      ))
    : [];

  // Combine all chunks (metadata first, then story)
  const allChunks = [
    <PersonalDetailsPage key="personal" data={personalDetails} />,
    <SalaryConditionsPage key="salary" data={salaryConditions} />,
    ...storyChunks,
  ];

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        {
          user: data?.postCreateds[0].author.slice(0, 6) + "..." + data?.postCreateds[0].author.slice(-4),
          text: newComment,
        },
      ]);
      setNewComment("");
    }
  };

  // console.log(data?.postCreateds);

  // Add state for title
  const [aiTitle, setAiTitle] = useState<string>("");

  // Add useEffect to generate title
  useEffect(() => {
    const generateTitle = async () => {
      try {
        const content = JSON.stringify(parsedData);
        const response = await fetch(`${window.location.origin}/api/generate-title`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        });

        const data = await response.json();
        if (data.title) {
          setAiTitle(data.title.replace(/"/g, "")); // Remove quotes if any
        }
      } catch (error) {
        console.error("Title generation failed:", error);
      }
    };

    if (parsedData && Object.keys(parsedData).length > 0) {
      generateTitle();
    }
  }, [parsedData]);

  if (!post) {
    return null;
  }

  return (
    <div className="mx-auto min-h-[80%] max-w-[75%] mt-10 rounded-lg grid grid-cols-1 md:grid-cols-3">
      {/* Left Side - Paginated Content */}
      <div className="md:col-span-2 rounded-lg shadow-md p-6">
        <TextSlider chunks={allChunks} />
      </div>

      {/* Right Side - Comments Section */}
      <div className="p-6 rounded-lg shadow-md border">
        <div className="flex items-center overflow-y-auto">
          <BlockieAvatar address={post.author} size={24} />
          <p className="text-sm ml-2">{post.author.slice(0, 6) + "..." + post.author.slice(-4)}</p>
          <button className="flex text-sm bg-blue-100 px-3 py-1 rounded-lg hover:bg-blue-200 ml-20">
            <IconSend className="h-5 w-5" />
          </button>
        </div>
        <div className="text-lg font-semibold text-gray-800 mb-2">{aiTitle}</div>
        <div>
          {(() => {
            const date = new Date(Number(post.blockTimestamp) * 1000);
            const day = String(date.getUTCDate()).padStart(2, "0");
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const year = date.getUTCFullYear();
            return `${day}-${month}-${year}`;
          })()}
        </div>

        <div className="mt-4 border-t pt-2 flex flex-col h-96">
          <div className="flex-1 overflow-y-auto">
            {comments.map((comment, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center">
                  <IconCircle className="h-4 w-4 mr-2" />
                  <p className="text-sm font-medium">{comment.user}</p>
                </div>
                <p className="ml-6 text-gray-600">{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-2 w-full bottom-0">
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-xl"
                placeholder="Enter comment here..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCommentSubmit()}
              />
              {/* <button className="px-4 py-2 rounded-r-lg hover:bg-gray-100" onClick={handleCommentSubmit}>
                <IconShare3 className="h-6 w-6" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
