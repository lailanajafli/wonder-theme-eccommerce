import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";
import RoutineCard from "../../../components/RoutineCard";

const DetailVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.log("Autoplay failed:", error));
      setIsPlaying(true);
    }
  }, []);

  return (
    <section className="detailVideoSection">
      <div className="videoContainer">
        <video
          ref={videoRef}
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/1f37a458867a4bf3926230d69a372666/1f37a458867a4bf3926230d69a372666.HD-1080p-4.8Mbps-8830164.mp4?v=0"
          loop
          muted
          autoPlay
        >
        </video>
        <button className="playPauseBtn" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="detailVideoText">
        <p className="detailVideoTextMini">Created In Harmony with Nature</p>
        <p className="naturalIngredients"></p>
      </div>
      </div>
    </section>
  );
};

export default DetailVideo;
