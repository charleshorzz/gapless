import React from "react";
import { IconDatabaseOff } from "@tabler/icons-react";

const NoChat = () => {
  return (
    <div className="h-fit min-h-full overflow-y-scroll rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <IconDatabaseOff size={50} />
        <h1 className="text-sm">No Chat History</h1>
      </div>
    </div>
  );
};

export default NoChat;
