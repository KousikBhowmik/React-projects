import React, { useEffect, useState } from "react";
import "./Recommend.css";
import { API_KEY } from "../../data.js";
import valueConvert from "../../functions.js";
import { Link } from "react-router-dom";

const Recommend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatadedVidoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatadedVidoURL)
      .then((res) => res.json())
      .then((data) => setApiData(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.default.url} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>

            <p>{valueConvert(item.statistics.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommend;
