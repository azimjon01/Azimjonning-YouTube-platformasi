import { Moon, Sun } from "lucide-react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/Azimjonning-logosi-online.svg";
import search_icon from "../../assets/search.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import VoiceSearch from "../voice/VoiceSearch";
import AccountMenu from "../account/AccountMenu";
import SubscriptionsMenu from "../subscriptions/SubscriptionsMenu";
import UploadMenu from "../stream/UploadMenu";
import MoreOptions from "../moreOptions/MoreOptions";

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
        <Link to="/" className="flex">
          <img className="logo w-[30px]" src={logo} />
          <h1 className="ml-2 text-black font-bold text-xl dark:text-white">
            Videolar
          </h1>
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
        <VoiceSearch />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-gray-100 dark:bg-gray-800 ml-2"
        >
          {!isDark ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="nav-right flex-div ">
        <UploadMenu />
        {/* <img src={more_icon} alt="" className="w-[25px] mr-[25px]" /> */}
        <MoreOptions />
        <SubscriptionsMenu />
        <AccountMenu />
      </div>
    </nav>
  );
};

export default Navbar;
