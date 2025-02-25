import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

interface VideoSnippet {
  title: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  description: string;
}

interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

interface VideoItem {
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}

interface ChannelSnippet {
  thumbnails: { default: { url: string } };
}

interface ChannelStatistics {
  subscriberCount: string;
}

interface ChannelItem {
  snippet: ChannelSnippet;
  statistics: ChannelStatistics;
}

interface CommentSnippet {
  authorDisplayName: string;
  authorProfileImageUrl: string;
  textDisplay: string;
  likeCount: string;
}

interface CommentItem {
  snippet: { topLevelComment: { snippet: CommentSnippet } };
}

const PlayVideo: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();

  const [apiData, setApiData] = useState<VideoItem | null>(null);
  const [channelData, setChannelData] = useState<ChannelItem | null>(null);
  const [commentData, setCommentData] = useState<CommentItem[]>([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items?.[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video bg-white dark:bg-gray-900 text-black dark:text-white p-4 transition-colors duration-300">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Creed II - &#39;Till I Collapse"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-96 rounded-lg shadow-md"
      ></iframe>
      <h3 className="text-xl font-bold mt-4 dark:text-gray-200">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>
      <div className="play-video-info flex justify-between items-center text-gray-700 dark:text-gray-400 mt-2">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <img src={like} alt="" className="w-5 h-5" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <img src={dislike} alt="" className="w-5 h-5" />2
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <img src={share} alt="" className="w-5 h-5" />
            Share
          </button>
          <button className="flex items-center space-x-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <img src={save} alt="" className="w-5 h-5" />
            Save
          </button>
        </div>
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <div className="publisher flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md">
        <img
          src={channelData?.snippet.thumbnails.default.url}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">
            {apiData ? apiData.snippet.channelTitle : ""}
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button className="ml-auto px-4 py-1 bg-red-500 text-white rounded-md">
          Subscribe
        </button>
      </div>
      <div className="vid-description mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
        <h4 className="text-lg font-semibold">
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div
              key={index}
              className="comment flex space-x-3 mt-3 p-3 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span className="text-xs text-gray-500">1 day ago</span>
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action flex items-center space-x-2 mt-1 text-gray-600 dark:text-gray-400">
                  <img src={like} alt="" className="w-4 h-4" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount,
                    )}
                  </span>
                  <img src={dislike} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
