import React, { useState, useEffect } from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";
import Card from "./Card";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

import AddEditModal from "./AddEditModal";
const CardsList = ({ listId, listType, cards, board, updateBoard }) => {
  console.log(listId);
  const gradiants = [
    "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
  ];
  const [board2, setBoard2] = useState(board);
  useEffect(() => {
    setBoard2(board);
  }, [board2]);

  const random = Math.floor(Math.random() * gradiants.length);

  return (
    <div className={`rounded-md ${gradiants[2]}`}>
      <div className="w-72 p-3 bg-gray-100 rounded-bg shadow-md drop-shadow-lg mt-1 h-full">
        <div className="flex mb-4 align-middle">
          <span className="text-2xl flex-1 text-gray-600">{cards.name}</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500 mt-2" />
        </div>
        <Droppable
          droppableId={listId}
          type={listType}
          direction="vertical"
          isCombineEnabled={false}
        >
          {(dropProvided) => (
            <div {...dropProvided.droppableProps}>
              <div>
                <div ref={dropProvided.innerRef}>
                  <div className="flex flex-col ">
                    {cards.items.map((card, index) => (
                      <Draggable
                        key={card.id}
                        draggableId={card.id}
                        index={index}
                      >
                        {(dragProvided) => (
                          <div
                            {...dragProvided.dragHandleProps}
                            {...dragProvided.draggableProps}
                            ref={dragProvided.innerRef}
                          >
                            <Card card={card} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
                {dropProvided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
        <AddEditModal
          board={board}
          column={cards}
          onBoardUpdate={updateBoard}
        />
      </div>
    </div>
  );
};

export default CardsList;
