const data4 = {
  a: ["blue", "red", "yellow"],
  b: ["pink"],
  c: ["green", "tan"],
  d: ["teal", "black", "magenta"],
};

const data = {
  a: {
    id: "column-1",
    name: "frst list",
    items: [
      { priority: "low", content: "blue" },
      { priority: "low", content: "red" },
      { priority: "high", content: "yellow" },
    ],
  },
  b: {
    id: "column-2",
    name: "second list",
    items: [{ priority: "low", content: "pink" }],
  },
  c: {
    id: "column-3",
    name: "third list",
    items: [
      { priority: "low", content: "green" },
      { priority: "medium", content: "tan" },
    ],
  },
  d: {
    id: "column-4",
    name: "fourth list",
    items: [
      { priority: "low", content: "teal" },
      { priority: "low", content: "black" },
      { priority: "low", content: "magenta" },
    ],
  },
};

const getUid = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

for (const [key, value] of Object.entries(data)) {
  // console.log(`${key}: ${value}`);
  // console.log();
  value.items.forEach((item, i) => {
    item.id = getUid();
    //item.index = i + 1;
  });
}

// Object.entries(data).forEach((list, i) => {
//   list.items.forEach((item, i) => {
//     item.id = i + 1;
//   });
// });

console.log(data);

// data.forEach((item, i) => {
//   item.id = i + 1;
// });

const data2 = {
  backlog: [
    { priority: "low", content: "company website redesign" },
    { priority: "medium", content: "make ui ux" },
  ],
  inprogress: [
    {
      priority: "high",
      content: "read about design pattrens and implement a code",
    },
    { priority: "medium", content: "refactor bug number 54353" },
    { priority: "low", content: "account profile diagrams" },
  ],
  review: [
    { priority: "low", content: "company website redesign" },
    {
      priority: "medium",
      content: "rethink requirements for implementing feature kys",
    },
    {
      priority: "low",
      content: "review clint specs regarding the requirements",
    },
    { priority: "high", content: "user profile prototypes" },
  ],
  complete: [
    {
      priority: "low",
      content: "create style guide based on previrws feedback",
    },
    { priority: "medium", content: "end user flow charts" },
  ],
};

export default data;
