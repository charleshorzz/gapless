import React from "react";

const CustomCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit min-h-full overflow-y-scroll rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm">
      {children}
    </div>
  );
};

export default CustomCard;
