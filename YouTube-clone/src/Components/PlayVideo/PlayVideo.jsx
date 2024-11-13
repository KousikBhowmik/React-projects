import React, { useEffect } from "react";
import "./PlayVideo.css";
import assets from "../../Assets/assets";
import { API_KEY } from "../../data.js";
import { useState } from "react";
import valueConvert from "../../functions.js";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const {videoId} = useParams();

  const fetchVideoData = async () => {
    const videoDelailsURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDelailsURL)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelDataURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelDataURL)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    await fetch(commentURL) 
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
    <div className="play-video">
      {/* <video src={assets.video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.channelTitle : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? valueConvert(apiData.statistics.viewCount) : "0"} views
          &bull;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Time"}
        </p>
        <div>
          <span>
            <img src={assets.like} />
            {apiData ? valueConvert() : "0"}
            {apiData ? valueConvert(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <img src={assets.dislike} />
          </span>
          <span>
            <img src={assets.share} />
            Share
          </span>
          <span>
            <img src={assets.save} />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "channel name"}</p>
          <span>
            {channelData
              ? valueConvert(channelData.statistics.subscriberCount)
              : "0"}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 300)
            : "Unable to load :("}
        </p>
        <hr />
        <h4>
          {apiData ? valueConvert(apiData.statistics.commentCount) : "0"}
          Comments
        </h4>
        {commentData
          ? commentData.map((item, index) => {
              return (
                <div key={index} className="comment">
                  <img
                    src={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                        ? item.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                        : assets.user_profile
                    }
                  />
                  <div>
                    <h3>
                      {item.snippet.topLevelComment.snippet.authorDisplayName.slice(
                        1
                      )}
                      <span>
                        {moment(
                          item.snippet.topLevelComment.publishedAt
                        ).fromNow()}
                      </span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-action">
                      <img src={assets.like} />
                      <span>
                        {valueConvert(
                          item.snippet.topLevelComment.snippet.likeCount
                        )}
                      </span>
                      <img src={assets.dislike} />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PlayVideo;
