import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "../data";
import { reorderColors } from "./reorder.js";
import CardsList from "./CardsList";
import Header from "./Header";
import { useParams } from "react-router";
import BoardsService from "../services/boards-service";

const Board = () => {
  //const [colorMap, setColors] = useState(data);
  const [board, setBoard] = useState({});
  const [boardUpdate, setBoardUpdate] = useState(false);
  const [columnsMap, setColumnsMap] = useState({});
  const { boardId } = useParams();

  useEffect(() => {
    BoardsService.getBoardById(boardId).then((res) => {
      //console.log(res);
      if (res.status === 200) {
        setBoard(res.data);
        setColumnsMap(res.data.columns);
      }
    });
  }, [boardUpdate]);

  const onDragEnd = ({ destination, source }) => {
    // // dropped outside the list
    if (!destination) {
      return;
    }
    setColumnsMap(reorderColors(columnsMap, source, destination));
    console.log(columnsMap);
  };

  const handleBoardUpdate = (updatedBoard) => {
    console.log(updatedBoard);
    setBoard(updatedBoard);
    setColumnsMap(updatedBoard.columns);
    setBoardUpdate(true);
  };

  return (
    <>
      <Header header={board.title} />
      <main class="min-h-screen justify-items-center  place-items-center">
        <div class="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.entries(columnsMap).map(([k, v]) => (
              <CardsList
                internalScroll
                key={k}
                listId={k}
                listType="CARD"
                cards={v}
                board={board}
                updateBoard={handleBoardUpdate}
              />
            ))}
          </DragDropContext>
        </div>
      </main>
    </>
  );
};

export default Board;
