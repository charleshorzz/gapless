"use client";

import React, { useState } from "react";
import { IconCheck, IconCircle, IconSend, IconShare3 } from "@tabler/icons-react";
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

  const metadataPage = (
    <div className="space-y-3">
      {/* Payslip Uploaded Banner */}
      {parsedData.payslip && (
        <div className="bg-green-100 p-3 rounded-lg flex items-center text-sm text-green-700 mb-4">
          <IconCheck className="h-4 w-4 mr-2" />
          Payslip verified
        </div>
      )}

      {Object.entries(parsedData).map(([key, value]) => {
        if (key === "story" || key === "payslip") return null;
        return (
          <div key={key}>
            <span className="font-semibold">{key}:</span>{" "}
            <span className="whitespace-pre-wrap">{value?.toString() || "-"}</span>
          </div>
        );
      })}
    </div>
  );

  // Create story chunks
  const storyChunks = parsedData.story
    ? splitTextIntoChunks(parsedData.story).map((chunk, index) => (
        <div key={`story-${index}`} className="prose max-w-none">
          {chunk}
        </div>
      ))
    : [];

  // Combine all chunks (metadata first, then story)
  const allChunks = [metadataPage, ...storyChunks];

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: data?.postCreateds[0].author, text: newComment }]);
      setNewComment("");
    }
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-10 text-red-500">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p>The job you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto h-3/4 w-3/4 mt-10 rounded-lg grid grid-cols-1 md:grid-cols-3">
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
        <div>
          {(() => {
            const date = new Date(Number(post.blockTimestamp) * 1000);
            const day = String(date.getUTCDate()).padStart(2, "0");
            const month = String(date.getUTCMonth() + 1).padStart(2, "0");
            const year = date.getUTCFullYear();
            return `${day}-${month}-${year}`;
          })()}
        </div>

        <div className="mt-4 border-t pt-2 h-80 flex flex-col">
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

          <div className="mt-auto pt-2 w-full">
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-xl"
                placeholder="Enter comment here..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCommentSubmit()}
              />
              <button className="px-4 py-2 rounded-r-lg hover:bg-gray-100" onClick={handleCommentSubmit}>
                <IconShare3 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
