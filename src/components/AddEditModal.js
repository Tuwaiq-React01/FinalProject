import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { useParams } from "react-router";
import Modal from "react-modal";
import getUid from "../services/uid";
import BoardsService from "../services/boards-service";

const AddEditModal = ({ board, column, onBoardUpdate }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");
  const { boardId } = useParams();
  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleradio = (e) => {
    setPriority(e.target.value);
  };

  const getColumn = (board, id) => {
    for (const column in board.columns) {
      console.log(`${column}: ${board.columns[column].id}`);
      console.log(board.columns[column].id === id);
      if (board.columns[column].id === id) {
        return column;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(board);
    console.log(column);
    const newTask = {
      id: getUid(),
      content: content,
      priority: priority,
    };
    const newColumn = { ...column };
    newColumn.items.push(newTask);
    const columnKey = getColumn(board, column.id);
    console.log(columnKey);
    console.log(board);
    board.columns[columnKey] = newColumn;
    console.log(board);
    BoardsService.updateBoard(boardId, board).then((res) => {
      console.log(res);
    });
    setIsOpen(false);
    onBoardUpdate(board);
  };
  return (
    <div>
      <div
        onClick={openModal}
        className="mb-4 text-center border-2 border-dashed border-gray-300 rounded my-2 p-4 cursor-pointer"
      >
        <span className="px-3 text-lg align-top font-medium text-gray-500">
          Add task
        </span>
        <PlusCircleIcon className="h-5 w-5 text-gray-500 inline align-middle " />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        //overlayClassName="Overlay"
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="py-6 px-14">
          <header className="text-2xl text-gray-500 font-medium">
            Add new task
          </header>
          <form onSubmit={handleSubmit} className="pt-8">
            <div>
              <label
                htmlFor="content"
                class="block text-sm font-medium text-gray-500 mb-4"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="3"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md mb-6"
                placeholder="what is this task about?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="priority"
                class="block text-sm font-medium text-gray-500 mb-4"
              >
                Task Priority
              </label>
              <div class="flex pt-4" onChange={handleradio}>
                <div class="">
                  <input
                    type="radio"
                    id="low"
                    name="priority"
                    value="low"
                    class="hidden"
                  />
                  <label
                    htmlFor="low"
                    class="text-gray-400 border px-10 py-2 border-solid bg-gray-200 rounded"
                  >
                    low
                  </label>
                </div>
                <div class="mx-4">
                  <input
                    type="radio"
                    id="medium"
                    name="priority"
                    value="medium"
                    class="hidden"
                  />
                  <label
                    htmlFor="medium"
                    class="text-gray-400 border px-10 py-2 border-solid bg-gray-200 rounded"
                  >
                    medium
                  </label>
                </div>

                <div class="">
                  <input
                    type="radio"
                    id="high"
                    name="priority"
                    value="high"
                    class="hidden"
                  />
                  <label
                    htmlFor="high"
                    class="text-gray-400 border px-10 py-2 border-solid bg-gray-200 rounded"
                  >
                    high
                  </label>
                </div>
              </div>
            </div>

            <button class="absolute bottom-4 right-6 px-7 py-3 mb-4 text-base font-semibold rounded-lg bg-blue-300 text-blue-600 hover:bg-blue-500 hover:text-blue-100">
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddEditModal;
