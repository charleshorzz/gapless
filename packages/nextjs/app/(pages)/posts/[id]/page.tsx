"use client";

import React, { useEffect, useState } from "react";
import { IconCheck, IconCircle, IconSend } from "@tabler/icons-react";
import OpenAI from "openai";
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
    { user: "0b4jak...8736", text: "Some Comment here" },
    { user: "0t8hxf...2456", text: "Another Comment here" },
  ]);

  const [newComment, setNewComment] = useState("");
  const { data } = usePostCreatedsQuery();
  const post = data?.postCreateds.find(p => p.id === params.id);
  const parsedData = post?.postData ? JSON.parse(post.postData) : {};

  const PersonalDetailsPage = ({ data }: { data: Record<string, any> }) => (
    <div className="space-y-4 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4 border-b pb-2 max-md:text-lg">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {["age", "gender", "ethnicity", "education", "jobTitle", "seniority", "experience", "industry"].map(key => (
          <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg max-md:p-2">
            <span className="text-gray-600 capitalize font-bold max-md:text-sm">{key}:</span>
            <span className="text-gray-800 text-sm max-md:text-xs">{data[key] || "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SalaryConditionsPage = ({ data }: { data: Record<string, any> }) => (
    <div className="space-y-4 p-4 rounded-lg shadow-sm">
      {parsedData.payslip && (
        <div className="bg-green-100 p-3 rounded-lg flex items-center text-sm text-green-700 mb-4 max-md:p-2">
          <IconCheck className="h-4 w-4 mr-2" />
          Payslip verified
        </div>
      )}
      <h2 className="text-xl font-bold mb-4 border-b pb-2 max-md:text-lg">Salary Conditions</h2>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
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
            } max-md:p-2 max-md:col-span-1`}
          >
            <span className="font-bold text-gray-600 capitalize max-md:text-sm">{key.replace(/([A-Z])/g, " $1")}</span>
            <span
              className={`text-gray-800 ${
                ["companyName", "companyType"].includes(key)
                  ? "text-sm break-words max-w-[400px] text-right"
                  : "text-sm"
              } max-md:text-xs`}
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
      ["age", "gender", "ethnicity", "education", "jobTitle", "seniority", "experience", "industry"].includes(key),
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

  const storyChunks = parsedData.story
    ? splitTextIntoChunks(parsedData.story).map((chunk, index) => (
        <div
          key={`story-${index}`}
          className="prose-lg max-w-3xl px-4 py-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow max-md:px-2 max-md:py-4"
        >
          <div className="space-y-4 max-md:space-y-2">
            {index === 0 && (
              <span className="float-left text-6xl font-bold mr-2 -mt-2 text-gray-700 max-md:text-4xl max-md:-mt-1">
                {chunk.charAt(0)}
              </span>
            )}
            <p className="text-gray-700 leading-relaxed tracking-wide text-justify max-md:text-sm">
              {index === 0 ? chunk.slice(1) : chunk}
            </p>
            {index !== 0 && (
              <div className="border-l-4 border-blue-200 pl-4 italic text-gray-600 max-md:pl-2 max-md:border-l-2">
                {chunk}
              </div>
            )}
          </div>
        </div>
      ))
    : [];

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

  const [aiTitle, setAiTitle] = useState<string>("");
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);

  // useEffect(() => {
  //   const generateTitle = async () => {
  //     setIsGeneratingTitle(true);
  //     try {
  //       const content = JSON.stringify({
  //         jobTitle: parsedData.jobTitle,
  //         seniority: parsedData.seniority,
  //         industry: parsedData.industry,
  //         companyName: parsedData.companyName,
  //         companyType: parsedData.companyType,
  //         location: parsedData.location,
  //       });

  //       const response = await fetch("/api/generate-title", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ content }),
  //       });

  //       if (!response.ok) throw new Error("Failed to generate title");
  //       const data = await response.json();
  //       setAiTitle(data.title.replace(/["]/g, "").trim());
  //     } catch (error) {
  //       console.error("Title generation failed:", error);
  //       setAiTitle("Professional Position Title");
  //     } finally {
  //       setIsGeneratingTitle(false);
  //     }
  //   };

  //   if (parsedData?.jobTitle) generateTitle();
  // }, [parsedData]);

  if (!post) return null;

  return (
    <div className="mx-auto min-h-[80%] max-w-[75%] mt-10 rounded-lg grid grid-cols-1 md:grid-cols-3 max-md:max-w-full max-md:mt-4 max-md:px-4">
      {/* Left Side - Paginated Content */}
      <div className="md:col-span-2 rounded-lg border shadow-md p-6 max-md:p-4">
        <TextSlider chunks={allChunks} />
      </div>

      {/* Right Side - Comments Section */}
      <div className="p-6 rounded-lg shadow-md border max-md:mt-4 max-md:p-4">
        <div className="flex items-center overflow-y-auto max-md:flex-wrap max-md:gap-2">
          <BlockieAvatar address={post.author} size={24} />
          <p className="text-sm ml-2 max-md:text-xs">{post.author.slice(0, 6) + "..." + post.author.slice(-4)}</p>
          <button className="flex text-sm bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 ml-20 max-md:ml-auto max-md:px-2">
            <IconSend className="h-5 w-5 max-md:h-4 max-md:w-4" />
          </button>
        </div>
        <div className="text-lg font-semibold mb-2 mt-2 max-md:text-base">
          {isGeneratingTitle ? (
            <span className="animate-pulse">Generating title...</span>
          ) : (
            aiTitle || "Professional Position Title"
          )}
        </div>
        <div className="text-sm max-md:text-xs">
          {(() => {
            const date = new Date(Number(post.blockTimestamp) * 1000);
            const day = String(date.getUTCDate()).padStart(2, "0");
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const year = date.getUTCFullYear();
            return `${day}-${month}-${year}`;
          })()}
        </div>

        <div className="mt-4 border-t pt-2 flex flex-col h-[420px] max-md:h-[300px]">
          <div className="flex-1 overflow-y-auto max-md:pr-2">
            {comments.map((comment, index) => (
              <div key={index} className="mb-4 max-md:mb-2">
                <div className="flex items-center">
                  <BlockieAvatar address="0x06f351e43c584E46ae4137c6d90d7B70C1F37EE8" size={24} />
                  <p className="text-sm max-md:text-xs ml-2">{comment.user}</p>
                </div>
                <p className="ml-6 text-gray-600 max-md:text-xs max-md:ml-4">{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-2 w-full bottom-0">
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-xl max-md:p-1.5 max-md:text-sm"
                placeholder="Enter comment here..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCommentSubmit()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
