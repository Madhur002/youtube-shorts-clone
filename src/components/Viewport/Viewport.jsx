import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // For fetching Pexels videos
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa6";
import useSidebarStore from "../store/store";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Viewport = () => {
  const [videos, setVideos] = useState([]); // Array to store fetched videos
  const [currentIndex, setCurrentIndex] = useState(0); // Index of currently displayed video
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/videos/popular?orientation=portrait",
          {
            headers: {
              Authorization: `IF8SwqudCE2SqtkonAh3HS53F8K0VciZCgkXWBZ4CTXs1nc0ocy3J8Xr `, // Replace with your Pexels API key
            },
          }
        );
        setVideos(response.data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  function getFormattedTitle(title) {
    // Remove unnecessary characters and spaces:
    const cleanTitle = title
      .replace(/[/\-_]/g, " ")
      .replace(/\d+/g, "")
      .trim();
    return cleanTitle;
  }

  const handleSwipeUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false); // Pause the video when changing the index
  };

  const handleSwipeDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    setIsPlaying(false); // Pause the video when changing the index
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  const handleDurationChange = () => {
    const video = videoRef.current;
    setDuration(video.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleSliderChange = (value) => {
    const video = videoRef.current;
    const newTime = (value * duration) / 100;
    setCurrentTime(newTime);
    video.currentTime = newTime;
  };

  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <div
      className={`flex justify-center py-10 gap-6 items-start h-full bg-[#0f0f0f] w-full fixed mt-[56px] ${
        isOpen && "pl-[240px]"
      }`}
    >
      <div className="flex flex-col h-[95%] items-center justify-between">
        <button
          className="bg-[#ffffff41] rounded-full p-2 text-white"
          onClick={handleSwipeDown}
        >
          <MdArrowUpward />
        </button>
        <button
          className="bg-[#ffffff41] rounded-full p-2 text-white"
          onClick={handleSwipeUp}
        >
          <MdArrowDownward />
        </button>
      </div>
      <div className="bg-white rounded-2xl h-[95%] w-[480px]">
        {videos[currentIndex] && (
          <div className="relative rounded-2xl h-full">
            <div className="bg-gradient-to-t from-[#00000000] to-[#000000cd] rounded-t-2xl h-[25%] absolute w-full">
              <button
                className="text-2xl text-[#ffffff] ml-4 mt-3"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <video
              onClick={togglePlay}
              ref={videoRef}
              className="w-full border-none h-full object-cover rounded-t-2xl"
              src={videos[currentIndex].video_files[0].link}
              //   controls
              onTimeUpdate={handleTimeUpdate}
              onDurationChange={handleDurationChange}
            />
            <div className="bottom-0 w-full absolute flex items-center">
              <input
                type="range"
                id="slider"
                value={(currentTime / duration) * 100 || 0}
                onChange={(e) => handleSliderChange(e.target.value)}
                className="custom-slider w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col w-[300px]">
        {videos[currentIndex] && (<>
        <p className="text-white uppercase text-xl">
          {getFormattedTitle(videos[currentIndex].url.slice(29))}
        </p>
        <p className="text-[#ffffffac] text-base">By @{videos[currentIndex].user.name}</p></>)}
        <div className="mt-10 flex flex-col w-10 gap-6 ">
            <div className="flex flex-col justify-start items-center gap-3">
            <button onClick={()=>{setLiked(!liked);setUnLiked(false)}} className={`flex justify-center items-center p-2 text-2xl ${liked ? "bg-[#1688e0e6]": "bg-[#ffffff45]"}  rounded-full`}>
            <AiOutlineLike/>
            </button>
            {liked ? "1": "0"}
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
            <button onClick={()=>{setUnLiked(!unliked);setLiked(false)}}  className={`flex justify-center items-center p-2 text-2xl ${unliked ? "bg-[#e04516e6]": "bg-[#ffffff45]"}  rounded-full`}>
            <AiOutlineDislike/>
            </button>
            {unliked ? "1": "0"}
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
            <button className="flex justify-center items-center p-2 text-2xl bg-[#ffffff45] rounded-full">
            <BiCommentDetail/>
            </button>
            807
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
            <button className="flex justify-center items-center p-2 text-2xl bg-[#ffffff45] rounded-full">
            <IoIosShareAlt/>
            </button>
            Share
            </div>
            <div className="flex flex-col justify-start items-center gap-3">
            <button className="flex justify-center items-center p-2 text-2xl bg-[#ffffff45] rounded-full">
            <HiOutlineDotsVertical/>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Viewport;
