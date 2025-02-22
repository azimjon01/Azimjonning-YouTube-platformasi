import "./Sidebar.css";
import React from "react";
import { Channel, MENU } from "./menu";
import { useTheme } from "../context/ThemeContext";

interface SidebarProps {
  sidebar: boolean;
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebar,
  category,
  setCategory,
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`sidebar ${sidebar ? "" : "small-sidebar"} ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200"}`}
    >
      <div className="sortcut-links">
        {MENU.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item.categoryNumber)}
            className={`side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer
              ${category === item.categoryNumber ? "active bg-gray-700 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
          >
            <img src={item.icon} alt="" className="w-[20px] mr-[20px]" />
            <p>{item.name}</p>
          </div>
        ))}

        <hr className="border-0 h-[1px] bg-gray-300 dark:bg-gray-700 w-[85%]" />
      </div>
      <div className="subscribed-list">
        <h3 className="text-[13px] my-5 mx-0 text-gray-500 dark:text-gray-400">
          Subscribed
        </h3>
        {Channel.map((item, index) => (
          <div
            key={index}
            className="side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <img
              src={item.name}
              alt=""
              className="w-[25px] rounded-[50%] mr-5"
            />
            <p>{item.channel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
