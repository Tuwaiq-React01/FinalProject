import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import getUid from "../services/uid";
import BoardsService from "../services/boards-service";

const AddBoardModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [column1, setColumn1] = useState("");
  const [column2, setColumn2] = useState("");
  const [column3, setColumn3] = useState("");
  const [column4, setColumn4] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const columnsArr = [column1, column2, column3, column4].filter((el) => {
      return el.length > 0;
    });
    var columnsObj = {};
    columnsArr.forEach((c, i) => {
      columnsObj[`col-${i}`] = { id: getUid(), name: c, items: [] };
    });
    //console.log(columnsObj);

    const body = {
      id: getUid(),
      title: title,
      columns: columnsObj,
    };

    console.log(body);
    BoardsService.addBoard(body).then((res) => {
      console.log(res);
      if (res.status == 200) {
        setIsOpen(false);
      }
    });
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-7 py-3 mr-16 text-base font-semibold rounded-lg bg-blue-300 text-blue-600 hover:bg-blue-500 hover:text-blue-100"
      >
        <PlusIcon className="w-6 h-6 inline" />
        <span className="items-baseline"> Add Board </span>
      </button>
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
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Board Name
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-500 mb-2"
              >
                Board Columns <br />
                <small>you can add from 2-4 columns</small>
              </label>

              <input
                type="text"
                value={column1}
                onChange={(e) => setColumn1(e.target.value)}
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={column2}
                onChange={(e) => setColumn2(e.target.value)}
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={column3}
                onChange={(e) => setColumn3(e.target.value)}
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={column4}
                onChange={(e) => setColumn4(e.target.value)}
                class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="absolute bottom-4 right-6 px-7 py-3 mb-4 text-base font-semibold rounded-lg bg-blue-300 text-blue-600 hover:bg-blue-500 hover:text-blue-100"
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddBoardModal;
