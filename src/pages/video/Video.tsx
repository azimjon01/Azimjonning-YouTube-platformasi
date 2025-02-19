import { useParams } from "react-router-dom";
import PlayVideo from "../../components/playVideo/PlayVideo";
import Recomended from "../../components/recomended/Recomended";
import "./Video.css";
import React from "react";

const Video: React.FC = () => {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();
  console.log("categoryId", categoryId);

  return (
    <div className="play-container">
      <PlayVideo />
      {categoryId && <Recomended categoryId={categoryId} />}
    </div>
  );
};

export default Video;
