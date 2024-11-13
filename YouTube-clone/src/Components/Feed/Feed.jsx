import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import { API_KEY } from "../../data";
import valueConvert from "../../functions.js";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoListURL)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            key={index}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConvert(item.statistics.viewCount)} views &bull;
              {}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
