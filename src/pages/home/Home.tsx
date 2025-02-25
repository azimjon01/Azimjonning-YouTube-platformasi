import React, { useState } from "react";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import { useTheme } from "../../components/context/ThemeContext";

interface HomeProps {
  sidebar: boolean;
}

const Home: React.FC<HomeProps> = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}
    >
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`container ${sidebar ? "" : "large-container"} bg-white dark:bg-gray-900 text-black dark:text-white p-4`}
      >
        <Feed category={String(category)} />
      </div>
    </div>
  );
};

export default Home;
