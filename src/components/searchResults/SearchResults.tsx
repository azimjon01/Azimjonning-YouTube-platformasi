import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";
import Sidebar from "../sidebar/Sidebar";

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

interface SearchResultsProps {
  sidebar: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ sidebar }) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";
  const [category, setCategory] = useState(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;

      const search_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=20&key=${API_KEY}`;
      try {
        const response = await fetch(search_url);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="flex p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="ml-0">
        <Sidebar
          sidebar={sidebar}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="ml-60">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          "{searchQuery}" bo‘yicha natijalar:
        </h2>
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link
              key={video.id.videoId}
              to={`/video/${video.id.videoId}`}
              className="flex items-start space-x-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-40 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {video.snippet.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {moment(video.snippet.publishedAt).fromNow()}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Hech qanday natija topilmadi...
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
