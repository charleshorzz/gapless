import React from "react";

const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full  rounded-lg  border-neutral-200 dark:border-neutral-700 p-3 shadow-sm  bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800 ">
      {children}
    </div>
  );
};

export default AuthBackground;
