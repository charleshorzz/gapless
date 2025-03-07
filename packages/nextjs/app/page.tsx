"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import JobList from "~~/components/Posts";

const DiscoverPage: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-lg w-1/3"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex-1 mt-16 max-h-[80vh] overflow-y-auto">
        <JobList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default DiscoverPage;
