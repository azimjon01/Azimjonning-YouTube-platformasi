import "./Recomended.css";
import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

interface VideoItem {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    categoryId: string;
    thumbnails: {
      medium: { url: string };
    };
  };
  statistics: {
    viewCount: string;
  };
}

interface RecomendedProps {
  categoryId: string;
}

const Recomended: React.FC<RecomendedProps> = ({ categoryId }) => {
  const [apiData, setApiData] = useState<VideoItem[]>([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData?.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Recomended;
