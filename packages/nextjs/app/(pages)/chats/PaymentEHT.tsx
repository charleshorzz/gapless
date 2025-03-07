import React from "react";
import CustomCard from "~~/app/CustomCard";

const PaymentEHT = () => {
  // Receive of Pay
  const pay = false;

  if (pay)
    return (
      <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800">
        <button className="btn btn-outline btn-warning rounded-md w-[100px] mb-3">0.001</button>
        <h1 className="text-sm text-neutral-600 dark:text-neutral-400">to start the conversation</h1>
      </div>
    );

  return (
    <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 p-3 shadow-sm flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800">
      <p className="text-neutral-600 dark:text-neutral-400">
        User <span className="text-orange-300  font-bold">Owda...123</span> had paid{" "}
        <span className="text-orange-300     font-bold">0.001 ETH</span> to request for conversation
      </p>
      <div className="flex gap-x-3">
        <button className="btn btn-soft btn-warning rounded-md w-[100px] mb-3">Accept</button>
        <button className="btn btn-ghost  hover:bg-red-400 rounded-md w-[100px] mb-3">Deny</button>
      </div>
    </div>
  );
};

export default PaymentEHT;
