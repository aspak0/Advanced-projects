import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img src="images/background.png" alt="" />
          <Avatar className="avatar" />
          <h2>Aspak i</h2>
          <h4>aspakiqbal@gmail.com</h4>
        </div>

        <div className="stats">
          <div className="stat">
            <p>Who Viewed You</p>
            <p className="statNumber"> 2599 </p>
          </div>

          <div className="stat">
            <p>Views on Post</p>
            <p className="statNumber"> 2030 </p>
          </div>
        </div>

        <div className="bottom">
          <p>Recent</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
