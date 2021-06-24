import React from "react";

const Header = ({ header }) => {
  return (
    <header className="flex h-16 px-16 my-4 items-center">
      <h1 id="page-caption" className="font-semibold text-3xl text-gray-500">
        {header}
      </h1>
    </header>
  );
};

export default Header;
