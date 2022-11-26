import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BussinessCentrIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <img
            src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
            alt=""
          />

          <div className="header_search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BussinessCentrIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="images/avatar.png" title="me" />
        </div>
      </div>
    </>
  );
};

export default Header;
