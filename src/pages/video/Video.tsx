import { useParams } from "react-router-dom";
import PlayVideo from "../../components/playVideo/PlayVideo";
import Recomended from "../../components/recomended/Recomended";
import "./Video.css";
import React from "react";
import { useTheme } from "../../components/context/ThemeContext";

const Video: React.FC = () => {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();
  const { isDark } = useTheme();

  return (
    <div className={`play-container ${isDark ? "dark" : ""}`}>
      <PlayVideo />
      {categoryId && <Recomended categoryId={categoryId} />}
    </div>
  );
};

export default Video;
