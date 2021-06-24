import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

const Card = ({ card }) => {
  const Priority = (priority) => {
    if (priority.length < 1) {
      return "";
    }
    if (priority === "high") {
      return (
        <span class="text-sm font-medium bg-red-100 py-1 px-2 rounded text-red-500 align-middle">
          {card.priority}
        </span>
      );
    } else if (priority === "medium") {
      return (
        <span class="text-sm font-medium bg-yellow-100 py-1 px-2 rounded text-yellow-500 align-middle">
          {card.priority}
        </span>
      );
    } else {
      return (
        <span class="text-sm font-medium bg-green-100 py-1 px-2 rounded text-green-500 align-middle">
          {card.priority}
        </span>
      );
    }
  };

  return (
    <div className="bg-white rounded my-2 p-4">
      <div className="flex">
        <div className="flex-1 "> {Priority(card.priority)}</div>
        <TrashIcon className="flex-none h-5 w-5 text-blue-500" />
      </div>
      <div className="text-lg text-gray-600 font-medium py-4">
        {card.content}
      </div>
    </div>
  );
};

export default Card;
