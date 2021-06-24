import { DraggableLocation } from "react-beautiful-dnd";

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderColors = (colors, source, destination) => {
  console.log(source);
  console.log(colors);
  console.log(colors[source.droppableId]);
  console.log(colors[source.droppableId].items);

  //const newItems = Array.from(start.taskIds);
  const current = [...colors[source.droppableId].items];
  const next = [...colors[destination.droppableId].items];
  const target = current[source.index];

  console.log(current);
  console.log(next);
  console.log(target);

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    // console.log({
    //   ...colors,
    //   [source.droppableId]: {
    //     id: colors[source.droppableId].id,
    //     name: colors[source.droppableId].name,
    //     items: reordered,
    //   },
    // });
    // return {
    //   ...colors,
    //   [source.droppableId]: reordered,
    // };
    return {
      ...colors,
      [source.droppableId]: {
        id: colors[source.droppableId].id,
        name: colors[source.droppableId].name,
        items: reordered,
      },
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  console.log({
    ...colors,
    [source.droppableId]: {
      id: colors[source.droppableId].id,
      name: colors[source.droppableId].name,
      items: current,
    },
    [destination.droppableId]: {
      id: colors[destination.droppableId].id,
      name: colors[destination.droppableId].name,

      items: next,
    },
  });

  // return {
  //   ...colors,
  //   [source.droppableId]: { ...source, current },
  //   [destination.droppableId]: { ...destination, next },
  // };

  return {
    ...colors,
    [source.droppableId]: {
      id: colors[source.droppableId].id,
      name: colors[source.droppableId].name,
      items: current,
    },
    [destination.droppableId]: {
      id: colors[destination.droppableId].id,
      name: colors[destination.droppableId].name,

      items: next,
    },
  };
};
