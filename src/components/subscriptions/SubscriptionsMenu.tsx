import React, { useState } from "react";
import { Link } from "react-router-dom";
import notification from "../../assets/notification.png";

const subscriptions = [
  {
    id: 1,
    name: "Tech Insider",
    image: "../../src/assets/thumbnail1.png",
  },
  {
    id: 2,
    name: "CodeWithMe",
    image: "../../src/assets/thumbnail2.png",
  },
  {
    id: 3,
    name: "React Simplified",
    image: "../../src/assets/thumbnail3.png",
  },
  {
    id: 4,
    name: "Next.js Mastery",
    image: "../../src/assets/thumbnail4.png",
  },
];

const SubscriptionsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mr-2">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <img src={notification} alt="" className="w-[25px]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-[-150px] mt-3 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-2 z-50">
          <ul className="space-y-2">
            {subscriptions.map((channel) => (
              <li key={channel.id}>
                <Link
                  to={`/channel/${channel.id}`}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <img
                    src={channel.image}
                    alt={channel.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-900 dark:text-white">
                    {channel.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubscriptionsMenu;
