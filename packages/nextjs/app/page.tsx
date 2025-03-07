"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import JobList from "~~/components/Posts";

const DiscoverPage: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center">
        <div className="relative w-1/3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IconSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 mt-16 max-h-[80vh] overflow-y-auto">
        <JobList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default DiscoverPage;
