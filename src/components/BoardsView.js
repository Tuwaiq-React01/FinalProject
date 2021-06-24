import React, { useState, useEffect } from "react";
import Header from "./Header";
import { PlusIcon } from "@heroicons/react/solid";
import BoardsService from "../services/boards-service";
import { Link } from "react-router-dom";
import AddBoardModal from "./AddBoardModal";

const BoardsView = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    BoardsService.getBoards().then((res) => {
      console.log(res);
      setBoards(res.data);
    });
  }, []);

  const deleteItem = (id) => {
    console.log(id);
    BoardsService.deleteBoard(id).then((res) => console.log(res));
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <Header header="Your Boards" />
        <AddBoardModal />
      </div>
      <div class="flex justify-center px-16">
        <div class="bg-white shadow-xl rounded-lg w-full mt-6">
          <ul class="divide-y divide-gray-300 text-gray-600 font-medium">
            {boards.map((board, index) => {
              return (
                <li
                  key={index}
                  class="p-4 hover:bg-blue-50 hover:text-blue-500 cursor-pointer"
                >
                  <Link
                    to={{
                      pathname: `/boards/${board.id}`,
                      state: { title: board.title },
                    }}
                  >
                    {board.title}
                  </Link>
                  <button
                    class="align-middle float-right inline px-3 py-2 -mt-2 text-sm font-light rounded-lg border
           text-gray-600  hover:text-red-800 hover:border-red-600"
                    onClick={() => deleteItem(board.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoardsView;
