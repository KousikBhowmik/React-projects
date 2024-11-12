import React from "react";
import "./Sidebar.css";
import assets from "../../Assets/assets";

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div>
      <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className="sortcut-links">
          <div
            className={`side-links ${category === 0 ? "active" : ""}`}
            onClick={() => setCategory(0)}
          >
            <img src={assets.home} />
            <p>Home</p>
          </div>
          <div
            className={`side-links ${category === 20 ? "active" : ""}`}
            onClick={() => setCategory(20)}
          >
            <img src={assets.game_icon} />
            <p>Gameing</p>
          </div>
          <div
            className={`side-links ${category === 2 ? "active" : ""}`}
            onClick={() => setCategory(2)}
          >
            <img src={assets.automobiles} />
            <p>Automobiles</p>
          </div>
          <div
            className={`side-links ${category === 17 ? "active" : ""}`}
            onClick={() => setCategory(17)}
          >
            <img src={assets.sports} />
            <p>Home</p>
          </div>
          <div
            className={`side-links ${category === 24 ? "active" : ""}`}
            onClick={() => setCategory(24)}
          >
            <img src={assets.entertainment} />
            <p>Entertaninment</p>
          </div>
          <div
            className={`side-links ${category === 28 ? "active" : ""}`}
            onClick={() => setCategory(28)}
          >
            <img src={assets.tech} />
            <p>Technology</p>
          </div>
          <div
            className={`side-links ${category === 10 ? "active" : ""}`}
            onClick={() => setCategory(10)}
          >
            <img src={assets.music} />
            <p>Music</p>
          </div>
          <div
            className={`side-links ${category === 22 ? "active" : ""}`}
            onClick={() => setCategory(22)}
          >
            <img src={assets.blogs} />
            <p>Blogs</p>
          </div>
          <div
            className={`side-links ${category === 25 ? "active" : ""}`}
            onClick={() => setCategory(25)}
          >
            <img src={assets.news} />
            <p>News</p>
          </div>
          <hr />
        </div>
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-links">
            <img src={assets.jack} />
            <p>PiwDiePie</p>
          </div>
          <div className="side-links">
            <img src={assets.simon} />
            <p>Mr.Beast</p>
          </div>
          <div className="side-links">
            <img src={assets.tom} />
            <p>Justin Bieber</p>
          </div>
          <div className="side-links">
            <img src={assets.megan} />
            <p>5-min-craft</p>
          </div>
          <div className="side-links">
            <img src={assets.cameron} />
            <p>why is she</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
