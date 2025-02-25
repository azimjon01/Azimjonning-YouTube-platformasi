import { Menu, Moon, Sun } from "lucide-react";
import logo from "../../assets/Azimjonning-logosi-online.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import VoiceSearch from "../voice/VoiceSearch";
import AccountMenu from "../account/AccountMenu";
import SubscriptionsMenu from "../subscriptions/SubscriptionsMenu";
import UploadMenu from "../stream/UploadMenu";
import MoreOptions from "../moreOptions/MoreOptions";
import Search from "../search/Search";
import "./Navbar.css";

interface NavbarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSidebar }) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav
      className={`flex-div p-[10px] justify-between shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-[#fff] sticky top-0 z-10 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="nav-left flex-div">
        <Menu
          className="menu-icon"
          onClick={() => {
            setSidebar((prev) => !prev);
          }}
        />
        <Link to="/" className="flex">
          <img className="logo w-[30px] h-[30px]" src={logo} />
          <h1 className="ml-2 text-black font-bold text-xl dark:text-white">
            Videolar
          </h1>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <Search />
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
        <MoreOptions />
        <SubscriptionsMenu />
        <AccountMenu />
      </div>
    </nav>
  );
};

export default Navbar;
