import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommend from "../../Components/Recommend/Recommend.jsx";
import { useParams } from "react-router-dom";


const Video = () => {

  const {videoId,categoryId} = useParams();

  return (
    <div className="play-container">
      <PlayVideo />
      <Recommend categoryId={categoryId} />
    </div>
  );
};

export default Video;
