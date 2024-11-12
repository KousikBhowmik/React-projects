import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import assets from "../../Assets/assets";
import dotenv from 'dotenv'

const Feed = ({category}) => {
  dotenv.config()
  const apiKey = process.env.VITE_API_KEY;
  console.log(apiKey);
  
  
  const fetchData = async () => {
    const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key={}`;
  }


  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src={assets.thumbnail1} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src={assets.thumbnail2} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumbnail3} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumbnail4} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumbnail5} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumbnail6} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={assets.thumbnail7} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      
      <div className="card">
        <img src={assets.thumbnail8} />
        <h2>Best channel to lean coding that help you to be a web developer</h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
