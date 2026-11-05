import { ChevronLeftSquare, Flashlight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    title: "Clients",
    route: "/clients",
  },
  {
    title: "Projects",
    route: "/projects",
  },
  {
    title: "Tasks",
    route: "/tasks",
  },
  {
    title: "Team",
    route: "/team",
  },
];

const Sidebar = () => {
  return (
    <aside className="bg-white border border-blue-100 rounded-2xl shadow px-3 py-5">
      <div className="relative">
        <div className="flex items-center gap-1">
          <div className="w-10 h-10 bg-blue-800 text-white flex justify-center items-center p-2 rounded-full">
            <Flashlight />
          </div>
          <h1 className="font-bold ">Taskify</h1>
        </div>

        <div className="absolute top-2 right-0 cursor-pointer text-blue-300">
          <ChevronLeftSquare/>
        </div>
      </div>
      <nav className="mt-10">
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.route}
                className={({ isActive}) =>
                   isActive ? "border border-blue-400 bg-blue-200 py-2 px-4 rounded-full block" : "border border-transparent py-2 px-4 rounded-full block"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
