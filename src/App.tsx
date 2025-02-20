import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { useState } from "react";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
