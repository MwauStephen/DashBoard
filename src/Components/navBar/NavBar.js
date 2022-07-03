import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Badge, Avatar } from "@mui/material";

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="search...." />
          <SearchIcon className={styles.icon} />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageIcon className={styles.icon} />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <FullscreenExitIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <Badge color="warning" badgeContent={1}>
              <NotificationsNoneOutlinedIcon className={styles.icon} />
            </Badge>
          </div>
          <div className={styles.item}>
            <Badge color="warning" badgeContent={1}>
              <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            </Badge>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: "2.4rem", height: "2.4rem " }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
