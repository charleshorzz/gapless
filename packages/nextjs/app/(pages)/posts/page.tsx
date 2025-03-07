"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { Breadcumb } from "~~/components/ui/breadcumb";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { usePostCreatedsQuery } from "~~/libs/generated/graphql";
import { fetchDataFromIPFS, uploadFileToIPFS } from "~~/utils/pinata";

type FormData = {
  name: string;
  age: number;
  gender: "Male" | "Female" | "PreferNotToSay";
  ethnicity: "Asian" | "Black" | "White" | "Hispanic" | "Other";
  education: "High School" | "Bachelor's" | "Master's" | "PhD";
};

const PostsPage = () => {
  //STATE
  const { handleSubmit, control, register } = useForm<FormData>();
  const { writeContractAsync: writePostContractAsync } = useScaffoldWriteContract({ contractName: "PostContract" });
  const { address: userAddress } = useAccount();
  const [postData, setPostData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  //API
  const {
    data,
    loading: queryLoading,
    error,
  } = usePostCreatedsQuery({
    variables: { first: 10 },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    onCompleted: data => {
      console.log("GraphQL Response:", data);
      if (data?.postCreateds?.length > 0) {
        setPostData(data.postCreateds);
      } else {
        console.warn("No posts found!");
      }
    },
  });

  console.log("postData state:", postData);

  //FUNCTION
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      console.log("Collected Form Data:", data);

      // Convert form data to a JSON string
      const postData = JSON.stringify(data);

      // Send data directly to the smart contract
      if (!userAddress) throw new Error("Please connect your wallet to create a post");
      await writePostContractAsync({
        functionName: "createPost",
        args: [{ owner: userAddress, postData }], //  Send JSON directly
      });

      alert("Post created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mt-8  w-full">
      <Breadcumb />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto mt-8">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Age</label>
          <input
            type="number"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your age"
            required
          />
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Gender</label>
        <select
          id="gender"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Ethnicity</label>
        <select
          id="ethnicity"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Your Ethnicity</option>
          <option value="Asian">Asian</option>
          <option value="White">White</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Black">Black</option>
          <option value="Indian">Others</option>
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select Your Highest Education
        </label>
        <select
          id="education"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Your Highest Education</option>
          <option value="Less than High School">Less than High School</option>
          <option value="High School">High School</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor's Degree">Bachelor Degree</option>
          <option value="Master's Degree">Master Degree</option>
          <option value="Doctoral's Degree">Doctoral Degree (Phd, EdD, etc)</option>
          <option value="Professional's Degree">Professional Degree (MD, JD, DDS, etc)</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
          {loading ? "Creating" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostsPage;
