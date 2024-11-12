import React from "react";
import "./Navbar.css";
import assets from "../../Assets/assets.js";
const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img
            src={assets.menu}
            onClick={() => {
              setSidebar((prev) => (prev === false ? true : false));
            }}
            className="menu-icon"
          />
          <img src={assets.logo} className="logo" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="search" />
            <img src={assets.search} className="" />
          </div>
        </div>
        <div className="nav-right">
          <img src={assets.upload} />
          <img src={assets.more} />
          <img src={assets.notification} />
          <img src={assets.jack} className="user-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
