import "./Sidebar.css";
import React, { useRef } from "react";
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent) => {
    if (sidebarRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
      if (
        (event.deltaY < 0 && scrollTop === 0) ||
        (event.deltaY > 0 && scrollTop + clientHeight === scrollHeight)
      ) {
        event.preventDefault();
      }
    }
  };

  return (
    <div
      ref={sidebarRef}
      onWheel={handleWheel}
      className={`sidebar h-screen fixed top-0 left-0 transition-all duration-300 shadow-lg border-r
      ${sidebar ? "w-64" : "w-20"}
      ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200"}
      overflow-y-auto`}
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      {/* Kategoriyalar */}
      <div className="p-4">
        {MENU.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item.categoryNumber)}
            className={`flex items-center mb-5 p-2 rounded-lg cursor-pointer
            transition-all duration-200 w-full
            ${category === item.categoryNumber ? "bg-gray-200 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6 mr-4" />
            {sidebar && <p>{item.name}</p>}
          </div>
        ))}

        <hr className="border-0 h-[1px] bg-gray-300 dark:bg-gray-700 w-full my-4" />
      </div>

      {/* Subscribed kanallar */}
      <div className="p-4">
        <h3 className="text-[10px] ml-[-10px] uppercase text-gray-500 dark:text-gray-400 mb-3">
          Subscribed
        </h3>
        {Channel.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-5 p-1 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 w-full"
          >
            <img
              src={item.name}
              alt={item.channel}
              className="w-8 h-8 rounded-full mr-4"
            />
            {sidebar && <p>{item.channel}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
