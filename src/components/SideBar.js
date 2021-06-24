import React from "react";
import { MapIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { TemplateIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
const SideBar = () => {
  return (
    <nav
      aria-label="side bar"
      aria-orientation="vertical"
      className="flex-none flex flex-col items-center text-center bg-teal-900 text-gray-400 border-r"
    >
      <div className="h-16 flex items-center justify-between w-full">
        <MapIcon className="h-6 w-6 mx-auto" />
      </div>

      <ul className="mt-12">
        <li className="py-6">
          <NavLink
            to="/boards"
            className="h-16 w-full"
            activeClassName="text-blue-500"
          >
            <div className="px-6">
              <TemplateIcon className="h-6 w-6 mx-auto" />
              <div className="text-md font-semibold">Boards</div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className="h-16 w-full"
            activeClassName="text-blue-500"
          >
            <div className="px-6">
              <UserIcon className="h-6 w-6 mx-auto" />
              <div className="text-md font-semibold">Profile</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
