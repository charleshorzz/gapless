"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { fetchDataFromIPFS, uploadFileToIPFS } from "~~/utils/pinata";

type FormData = {
  name: string;
  age: number;
  gender: "Male" | "Female" | "PreferNotToSay";
  ethnicity: "Asian" | "Black" | "White" | "Hispanic" | "Other";
  education: "High School" | "Bachelor's" | "Master's" | "PhD";
};

const PostsPage = () => {
  const { handleSubmit, control, register } = useForm<FormData>();
  const { writeContractAsync: writePostContractAsync } = useScaffoldWriteContract({ contractName: "PostContract" });
  const { address: userAddress } = useAccount();

  const [loading, setLoading] = useState(false);

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
    <div className="text-center mt-8 bg-primary p-10">
      <h1 className="text-4xl my-0">Create a Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto mt-8">
        {/* Name Input */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input {...register("name", { required: true })} type="text" className="input" placeholder="Type here" />
        </fieldset>

        {/* Age Input */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your age?</legend>
          <input
            {...register("age", { required: true, valueAsNumber: true })}
            type="number"
            className="input"
            placeholder="Enter age"
          />
        </fieldset>

        {/* Gender Dropdown */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Gender</legend>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <select {...field} className="select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="PreferNotToSay">Prefer Not To Say</option>
              </select>
            )}
          />
        </fieldset>

        {/* Ethnicity Dropdown */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Ethnicity</legend>
          <Controller
            control={control}
            name="ethnicity"
            render={({ field }) => (
              <select {...field} className="select">
                <option value="Asian">Asian</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Other">Other</option>
              </select>
            )}
          />
        </fieldset>

        {/* Highest Education Dropdown */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Highest Education</legend>
          <Controller
            control={control}
            name="education"
            render={({ field }) => (
              <select {...field} className="select">
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelors</option>
                <option value="Master's">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            )}
          />
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
          {loading ? "Creating" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostsPage;
