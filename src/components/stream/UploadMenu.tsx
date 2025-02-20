import React, { useState } from "react";
import upload_icon from "../../assets/upload.png";
import { Video, Camera, PlusCircle, X } from "lucide-react";

const UploadMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mr-3">
      {/* Video Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg dark:bg-gray-800 hover:bg-gray-100 transition"
      >
        <img src={upload_icon} alt="" className="w-[25px]" />
      </button>

      {/* Modal Oyna */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-80">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Video Qo‘shish
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Camera size={20} className="text-gray-900 dark:text-white" />
                <span className="text-gray-900 dark:text-white">
                  Jonli efir
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Video size={20} className="text-gray-900 dark:text-white" />
                <span className="text-gray-900 dark:text-white">
                  Video yuklash
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <PlusCircle
                  size={20}
                  className="text-gray-900 dark:text-white"
                />
                <span className="text-gray-900 dark:text-white">
                  Hikoya qo‘shish
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadMenu;
