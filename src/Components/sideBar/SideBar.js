import React from "react";
import SideBarList from "./sideBarList";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles["side-bar"]}>
      <div className={styles["top-bar"]}>
        <span className={styles.logo}>KyleDash</span>
      </div>
      <hr />
      <div className={styles["center-bar"]}>
        <SideBarList />
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["color-options"]}></div>
        <div className={styles["color-options"]}></div>
      </div>
    </div>
  );
};

export default SideBar;
