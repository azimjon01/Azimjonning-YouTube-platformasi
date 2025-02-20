import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";
import { VideoItem, FeedProps } from "../../types";
import { useTheme } from "../context/ThemeContext";

const Feed = ({ category }: FeedProps) => {
  const [data, setData] = useState<VideoItem[]>([]);
  const { isDark } = useTheme();

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [category]);

  return (
    <div className="feed bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
      {data.map((item, index) => {
        return (
          <Link
            key={index}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-lg shadow-md transition-colors duration-300"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="rounded-lg"
            />
            <h2 className="text-lg font-semibold dark:text-gray-200">
              {item.snippet.title}
            </h2>
            <h3 className="text-sm text-gray-700 dark:text-gray-400">
              {item.snippet.channelTitle}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {value_converter(item.statistics.viewCount)} views &bull;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
