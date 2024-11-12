import React from 'react'
import './PlayVideo.css'
import assets from '../../Assets/assets'

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={assets.video} controls autoPlay muted></video>
      <h3>Best channel to lean coding that help you to be a web developer</h3>
      <div className='play-video-info'>
        <p>1525 views &bull; 2 days ago</p>
        <div>
            <span><img src={assets.like}/>125</span>
            <span><img src={assets.dislike}/>2</span>
            <span><img src={assets.share}/>Share</span>
            <span><img src={assets.save}/>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={assets.jack} />
        <div>
            <p>Greatstack</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that make learning easy</p>
        <p>Subscribe greatestack to watch more coding videos</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
            <img src={assets.user_profile} />
            <div>
                <h3>Jack oop <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum quia quas! Totam, incidunt eum.</p>
                <div className='comment-action'>
                    <img src={assets.like} />
                    <span>244</span>
                    <img src={assets.dislike} />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={assets.user_profile} />
            <div>
                <h3>Jack oop <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum quia quas! Totam, incidunt eum.</p>
                <div className='comment-action'>
                    <img src={assets.like} />
                    <span>244</span>
                    <img src={assets.dislike} />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={assets.user_profile} />
            <div>
                <h3>Jack oop <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum quia quas! Totam, incidunt eum.</p>
                <div className='comment-action'>
                    <img src={assets.like} />
                    <span>244</span>
                    <img src={assets.dislike} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo