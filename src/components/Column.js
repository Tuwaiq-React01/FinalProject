import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
const Column = () => {
  return (
    <div className="w-96 p-3 bg-green-300 rounded-md shadow-md drop-shadow-lg border-t-4 border-green-800">
      <div className="flex mb-4">
        <span className="text-2xl flex-1">To-Do</span>
        <ChevronDownIcon className="h-5 w-5 text-blue-500" />
      </div>
      <div className="bg-red-500 rounded">gsdgds</div>
      <div>gsdgds</div>
    </div>
  );
};

export default Column;
