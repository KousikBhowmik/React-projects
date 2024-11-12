import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommend from "../../Components/Recommend/Recommend.jsx";


const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommend />
    </div>
  );
};

export default Video;
