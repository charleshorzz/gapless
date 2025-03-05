import React from "react";

const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center items-center h-full bg-indigo-100 rounded-md ">{children}</div>;
};

export default AuthBackground;
