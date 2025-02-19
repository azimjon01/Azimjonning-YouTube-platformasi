import "./Sidebar.css";
import React from "react";
import { Channel, MENU } from "./menu";

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
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        {MENU.map((item) => (
          <div
            onClick={() => setCategory(item.categoryNumber)}
            className={`side-link ${category === item.categoryNumber ? "active" : ""} flex items-center mb-5 w-fit flex-wrap cursor-pointer`}
          >
            <img src={item.icon} alt="" className="w-[20px] mr-[20px]" />
            <p>{item.name}</p>
          </div>
        ))}

        <hr className="border-0 h-[1px] bg-[#ccc] w-[85%]" />
      </div>
      <div className="subscribed-list">
        <h3 className="text-[13px] my-5 mx-0 text-[#5a5a5a]">Subscribed</h3>
        {Channel.map((item) => (
          <div className="side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer">
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
