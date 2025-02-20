import { Mic, Moon, Sun } from "lucide-react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSidebar }) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav
      className={`flex-div p-[10px] px-[2%] justify-between shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-[#fff] sticky top-0 z-10 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="nav-left flex-div">
        <img
          className="menu-icon w-[22px] mr-[25px]"
          src={menu_icon}
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Link to="/">
          <img className="logo w-[130px]" src={logo} />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div border border-[#ccc] mr-[15px] py-2 px-3 rounded-[25px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] border-0 outline-0 bg-transparent text-black dark:text-white "
          />
          <img src={search_icon} className="w-[15px]" />
        </div>
        <button className="flex flex-shrink-0 md:gap-2">
          <Mic />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        >
          {!isDark ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-white-900" />
          )}
        </button>
      </div>
      <div className="nav-right flex-div ">
        <img src={upload_icon} alt="" className="w-[25px] mr-[25px]" />
        <img src={more_icon} alt="" className="w-[25px] mr-[25px]" />
        <img src={notification} alt="" className="w-[25px] mr-[25px]" />
        <img
          className="user-icon w-[35px] rounded-[50%] mr-[25px]"
          src={profile_icon}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
