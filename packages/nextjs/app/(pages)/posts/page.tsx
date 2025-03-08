"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import CustomSeparaor from "~~/app/CustomSeparaor";
import { Breadcumb } from "~~/components/ui/breadcumb";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { usePostCreatedsQuery } from "~~/libs/generated/graphql";
import {
  COMPANY_TYPE,
  EDUCATION_OPTIONS,
  EMPLOYMENT_TYPE,
  ETHNICITY_OPTIONS,
  EXPERIENCE_OPTIONS,
  GENDER_OPTIONS,
  INDUSTRY_OPTIONS,
  LOCATION_OPTIONS,
  SENIORITY_OPTIONS,
} from "~~/utils/inputEnums";
import { fetchDataFromIPFS, uploadFileToIPFS } from "~~/utils/pinata";

type FormData = {
  name: string;
  age: number;
  gender: (typeof GENDER_OPTIONS)[number];
  ethnicity: (typeof ETHNICITY_OPTIONS)[number];
  education: (typeof EDUCATION_OPTIONS)[number];
  jobTitle: string;
  seniority: (typeof SENIORITY_OPTIONS)[number];
  experience: (typeof EXPERIENCE_OPTIONS)[number];
  exactExperience: number;
  companyName: string;
  companyType: (typeof COMPANY_TYPE)[number];
  industry: (typeof INDUSTRY_OPTIONS)[number];
  employmentType: (typeof EMPLOYMENT_TYPE)[number];
  location: (typeof LOCATION_OPTIONS)[number];
  baseSalary: number;
  otherCompensation: boolean;
  allowance: number;
  bonus: number;
  commission: number;
  stock: number;
  payslip: File;
  chatPrice: number;
  story: string;
};

const PostsPage = () => {
  //STATE
  const tabOrder = ["personalDetails", "jobDetails", "salaryInfo", "story"];
  const [activeSection, setActiveSection] = useState<"personalDetails" | "jobDetails" | "salaryInfo" | "story">(
    "personalDetails",
  );
  const [formData, setFormData] = useState<FormData>();
  const { handleSubmit, control, register, watch, setValue, reset } = useForm<FormData>({
    defaultValues: formData, // Set default values from state
  });
  const { writeContractAsync: writePostContractAsync } = useScaffoldWriteContract({ contractName: "PostContract" });
  const { address: userAddress } = useAccount();
  const [postData, setPostData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [hasOtherCompensation, setHasOtherCompensation] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();

  //API
  // const {
  //   data,
  //   loading: queryLoading,
  //   error,
  // } = usePostCreatedsQuery({
  //   variables: { first: 10 },
  //   fetchPolicy: "network-only",
  //   notifyOnNetworkStatusChange: true,
  //   onCompleted: data => {
  //     console.log("GraphQL Response:", data);
  //     if (data?.postCreateds?.length > 0) {
  //       setPostData(data.postCreateds);
  //     } else {
  //       console.warn("No posts found!");
  //     }
  //   },
  // });

  //FUNCTION
  const onSubmit = async (data: FormData) => {
    setFormData(data);

    const currentIndex = tabOrder.indexOf(activeSection);
    const nextIndex = currentIndex + 1;
    const initialData: FormData = {
      name: "",
      age: 0,
      gender: "Male",
      ethnicity: ETHNICITY_OPTIONS[0],
      education: EDUCATION_OPTIONS[0],
      jobTitle: "",
      seniority: SENIORITY_OPTIONS[0],
      experience: EXPERIENCE_OPTIONS[0],
      exactExperience: 0,
      companyName: "",
      companyType: COMPANY_TYPE[0],
      industry: INDUSTRY_OPTIONS[0],
      employmentType: EMPLOYMENT_TYPE[0],
      location: LOCATION_OPTIONS[0],
      baseSalary: 0,
      otherCompensation: false,
      allowance: 0,
      bonus: 0,
      commission: 0,
      stock: 0,
      payslip: null as unknown as File,
      story: "",
      chatPrice: 0,
    };

    // Code here start for VALIDATION
    const requiredFields: (keyof FormData)[] = [
      "age",
      "gender",
      "ethnicity",
      "education",
      "jobTitle",
      "seniority",
      "experience",
      // "exactExperience"
      "companyName",
      "companyType",
      "industry",
      "employmentType",
      "location",
      "baseSalary",
      // "allowance",
      // "bonus",
      // "commission",
      // "stock",
      "story",
    ];

    // Conditionally add financial fields if `hasOtherCompensation` and `selectedExperience` is true
    if (hasOtherCompensation) {
      requiredFields.push("allowance", "bonus", "commission", "stock");
    }
    // if (selectedExperience) {
    //   requiredFields.push("exactExperience");
    // }

    const missingFields = requiredFields.filter(field => {
      const value = data[field];

      if (typeof value === "string") return value.trim() === "";
      if (typeof value === "number") return isNaN(value) || value === 0;
      if (value instanceof File) return !value;
      return value === null || value === undefined;
    });
    // End for VALIDATION

    if (!data.story && nextIndex < tabOrder.length) {
      // Move to the next tab if 'story' is empty
      setActiveSection(tabOrder[nextIndex] as "personalDetails" | "jobDetails" | "salaryInfo" | "story");
    } else if (missingFields.length > 0) {
      toast.error(`Please complete all the fields before submitting: ${missingFields.join(", ")}`);
    } else {
      try {
        setLoading(true);
        let payslipHash = null;

        // Upload payslip to IPFS if provided
        if (data.payslip) {
          payslipHash = await uploadFileToIPFS(data.payslip);
        }

        // Prepare postData object
        const rawpostData = {
          ...data,
          payslip: payslipHash,
        };

        //Send in WEI
        const chatPrice = data?.chatPrice ? parseEther(data.chatPrice.toString()) : BigInt(0);

        // Prepare postComment (to be modified)
        const postComment = "awdawadaw";

        // Convert postData to a JSON string
        const postData = JSON.stringify(rawpostData);

        // Send data directly to the smart contract
        if (!userAddress) throw new Error("Please connect your wallet to create a post");
        await writePostContractAsync({
          functionName: "createPost",
          args: [postData, chatPrice, postComment], //  Send JSON directly
        });

        toast.success("Post created successfully!");
        setActiveSection("personalDetails");
        reset(initialData);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    if (file) {
      setSelectedFile(file);
      setValue("payslip", file, { shouldValidate: true }); // Store as File
    }
  };

  useEffect(() => {
    const subscription = watch(data => {
      setFormData(data);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className=" w-full">
      <Breadcumb setActiveSection={setActiveSection} />
      <CustomSeparaor />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-xl mx-auto mt-4">
        {activeSection === "personalDetails" && (
          <>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
              <input
                type="number"
                id="age"
                {...register("age")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eg. 18"
                required
              />
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
            <select
              id="gender"
              {...register("gender")}
              defaultValue={""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {GENDER_OPTIONS.map(gender => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ethnicity</label>
            <select
              id="ethnicity"
              {...register("ethnicity")}
              defaultValue={""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {ETHNICITY_OPTIONS.map(x => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highest Education</label>
            <select
              id="education"
              {...register("education")}
              defaultValue={""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {EDUCATION_OPTIONS.map(x => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </>
        )}

        {activeSection === "jobDetails" && (
          <div className="grid grid-flow-rows grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                {...register("jobTitle")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eg. Software Engineer"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seniority</label>
              <select
                id="seniority"
                {...register("seniority")}
                defaultValue={"Seniority"}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {SENIORITY_OPTIONS.map(seniority => (
                  <option key={seniority} value={seniority}>
                    {seniority}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">Years of Experience</label>
                <label className="block mb-2 text-[11px] font-medium text-gray-400 dark:text-white">
                  Relavant years of experience in your current field
                </label>
              </div>
              <select
                id="experience"
                {...register("experience")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedExperience}
                onChange={e => setSelectedExperience(e.target.value)}
                required
              >
                {EXPERIENCE_OPTIONS.map(experience => (
                  <option key={experience} value={experience}>
                    {experience}
                  </option>
                ))}
              </select>

              <div>
                {/* Show additional input if "More than 10 years" is selected */}
                {selectedExperience === "More than 10 years" && (
                  <div className="mt-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Enter your years of experience
                    </label>
                    <input
                      type="number"
                      {...register("exactExperience")}
                      id="exactExperience"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter number of years"
                      min="11"
                      required
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eg. Asia Pacific University"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Type</label>
              <select
                id="companyType"
                {...register("companyType")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {COMPANY_TYPE.map(x => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
              <select
                id="industry"
                {...register("industry")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {INDUSTRY_OPTIONS.map(x => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment Type</label>
              <select
                id="employmentType"
                {...register("employmentType")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {EMPLOYMENT_TYPE.map(x => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where do you stay?</label>
              <select
                id="location"
                {...register("location")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {LOCATION_OPTIONS.map(x => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeSection === "salaryInfo" && (
          <>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Base Salary Per Month (RM)
              </label>
              <input
                type="number"
                id="baseSalary"
                {...register("baseSalary")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0.00"
                required
              />
            </div>

            {/* Other Compensation Selection */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Do you have other compensation?
              </label>
              <select
                id="otherCompensation"
                {...register("otherCompensation")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={e => setHasOtherCompensation(e.target.value === "Yes")}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Conditional Other Compensation Fields */}
            {hasOtherCompensation && (
              <>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allowance (RM)</label>
                  <input
                    {...register("allowance")}
                    type="number"
                    id="allowance"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bonus (RM)</label>
                  <input
                    type="number"
                    id="bonus"
                    {...register("bonus")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Commission (RM)
                  </label>
                  <input
                    type="number"
                    id="commission"
                    {...register("commission")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock (RM)</label>
                  <input
                    type="number"
                    id="stock"
                    {...register("stock")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </>
            )}
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">Upload Payslip</label>
                <label className="block mb-2 text-xs font-small text-gray-400 dark:text-white">
                  Uploading payslip is optional, we will upload it to IPFS, and store the hash on chain, it will
                  increase your post credibility
                </label>
              </div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="payslip"
                accept=".png,.pdf"
                onChange={handleFileChange}
                type="file"
              />
              {selectedFile ? (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">File: {selectedFile.name}</p>
              ) : (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                  PNG, PDF only
                </p>
              )}
            </div>
          </>
        )}

        {activeSection === "story" && (
          <>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chat Price (ETH)</label>
              <label className="block mb-2 text-xs font-medium text-gray-400 dark:text-white">
                Whenever someone wants to chat with you regarding your career, they need to pay this amount
              </label>
              <input
                type="number"
                id="chatPrice"
                step={0.00000001}
                {...register("chatPrice")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0.00001"
                required
              />
            </div>
            <div className="mb-10">
              <div>
                <label className="block  text-sm font-medium text-gray-900 dark:text-white">Tell us about you</label>
                <label className="block mb-2 text-xs font-medium text-gray-400 dark:text-white">
                  It will be how your career path goes through
                </label>
              </div>
              <textarea
                id="story"
                {...register("story")}
                rows={13}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Share your career path here"
              ></textarea>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn rounded-lg w-full btn-primary dark:bg-[#385183] dark:hover:bg-[#2b3e65] "
          disabled={loading}
        >
          {activeSection !== "story" ? (
            "Next"
          ) : loading ? (
            <span className="loading loading-dots loading-xs text-neutral-700 dark:text-white"></span>
          ) : (
            "Create Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default PostsPage;
