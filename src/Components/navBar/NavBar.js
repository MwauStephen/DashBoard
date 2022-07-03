import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="search...." />
          <SearchIcon />
        </div>
        <div className={styles.item}>
          <LanguageIcon />
        </div>
        <div className={styles.item}>
          <DarkModeOutlinedIcon />
        </div>
        <div className={styles.item}>
          <FullscreenExitIcon />
        </div>
        <div className={styles.item}>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className={styles.item}>
          <ChatBubbleOutlineOutlinedIcon />
        </div>
        <div className={styles.item}>
          <ListOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
