import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Settings, User, Users } from "lucide-react";
import profile_icon from "../../assets/jack.png";

const AccountMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center   rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <img
          className="user-icon w-[35px] rounded-[50%]"
          src={profile_icon}
          alt=""
        />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-2 z-50">
          <div className="p-3 flex items-center space-x-3">
            <img
              className="user-icon w-[35px] rounded-[50%]"
              src={profile_icon}
              alt=""
            />
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">
                Username
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                user@example.com
              </p>
            </div>
          </div>
          <hr className="border-gray-300 dark:border-gray-700 my-2" />
          <ul className="space-y-2">
            <li>
              <Link
                to="/channel"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <User size={20} />
                <span>Mening kanallarim</span>
              </Link>
            </li>
            <li>
              <Link
                to="/subscriptions"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Users size={20} />
                <span>Obunalar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <Settings size={20} />
                <span>Sozlamalar</span>
              </Link>
            </li>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
            <li>
              <button className="flex w-full items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <LogOut size={20} />
                <span>Chiqish</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
