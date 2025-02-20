import React, { useState, useEffect, useRef } from "react";
import { Youtube, Video, Music, Book } from "lucide-react";
import more_icon from "../../assets/more.png";

const AppDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mr-3">
      {/* 4 kvadratli tugma */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <img src={more_icon} alt="" className="w-[25px] " />
      </button>

      {/* Modal menyu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 grid grid-cols-2 gap-4 z-50"
        >
          <button className="flex flex-col items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition rounded-lg">
            <Youtube size={24} className="text-red-500" />
            <span className="text-gray-900 dark:text-white text-sm">
              YouTube
            </span>
          </button>
          <button className="flex flex-col items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition rounded-lg">
            <Video size={24} className="text-blue-500" />
            <span className="text-gray-900 dark:text-white text-sm">
              YouTube TV
            </span>
          </button>
          <button className="flex flex-col items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition rounded-lg">
            <Music size={24} className="text-green-500" />
            <span className="text-gray-900 dark:text-white text-sm">
              YouTube Music
            </span>
          </button>
          <button className="flex flex-col items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition rounded-lg">
            <Book size={24} className="text-yellow-500" />
            <span className="text-gray-900 dark:text-white text-sm">
              YouTube Kids
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AppDrawer;
