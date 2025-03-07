"use client";

import React, { useState } from "react";
import { IconShare3 } from "@tabler/icons-react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

interface Props {
  params: { id: string };
}

interface Job {
  role: string;
  industry: string;
  location: string;
  profile: string;
  qualification: string;
  salary: string;
  address: string;
}

interface Comment {
  user: string;
  text: string;
}

interface Post {
  address: string;
  content: string;
  images: string[];
}

const jobData: Job[] = [
  {
    role: "Senior QA Engineer",
    industry: "Fintech",
    location: "Kuala Lumpur",
    profile: "Male, Malay, 30",
    qualification: "Bachelor's degree",
    salary: "USD 115,000",
    address: "0xw...490",
  },
  // Add more job entries as needed
];

const postData: Post[] = [
  {
    address: "0xw...490",
    content: "123",
    images: [],
  },
];

const JobDetail = ({ params }: Props) => {
  // const jobIndex = parseInt(params.id, 10);
  const postIndex = parseInt(params.id, 10);
  // const job = jobData[jobIndex];
  const post = postData[postIndex];

  const [comments, setComments] = useState<Comment[]>([
    { user: "0wd...5345", text: "Some Comment here" },
    { user: "0wd...5346", text: "Another Comment here" },
  ]);

  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-10 text-red-500">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p>The job you are looking for does not exist.</p>
      </div>
    );
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: post.address, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 shadow-xl rounded-lg mt-20 grid grid-cols-1 md:grid-cols-3">
      {/* Left Side - Job Post */}
      <div className="md:col-span-2 p-6 rounded-lg shadow-md">
        {/* <h1 className="flex justify-center text-2xl font-bold mb-2">{job.role}</h1>
        <div className="border p-4 rounded-lg">
          <p>
            <strong>Industry:</strong> {job.industry}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Profile:</strong> {job.profile}
          </p>
          <p>
            <strong>Qualification:</strong> {job.qualification}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p> */}
        <div className="">{post.images}</div>
      </div>

      {/* Image Slider */}
      {/* {post.images.length > 0 && (
        <div className="mt-4">
          <Slide autoplay={true} duration={3000} transitionDuration={500}>
            {post.images.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </Slide>
        </div> */}
      {/* )} */}

      {/* Right Side - Title, Comments */}
      <div className="p-6 rounded-lg shadow-md">
        {/* Post Title */}
        <div className="flex items-center overflow-y-auto">
          <span className="text-lg">⬤</span>
          <p className="text-sm ml-2">{post.address}</p>
        </div>
        <h2 className="text-lg font-semibold mb-2">{post.content}</h2>

        {/* Comments Section */}
        <div className="mt-4 border-t pt-2 h-80 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {comments.map((comment, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <span className="text-lg">⬤</span>
                  <p className="text-sm ml-2">{comment.user}</p>
                </div>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>

          {/* Comment Input */}
          <div className="mt-2 flex items-center border-t pt-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-xl"
              placeholder="Enter comment here..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCommentSubmit();
                }
              }}
            />
            <button className="px-4 py-2 rounded-r-lg" onClick={handleCommentSubmit}>
              <IconShare3 className="text-neutral-700 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
