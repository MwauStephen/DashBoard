import React, { useContext } from "react";
import SideBarList from "./sideBarList";
import { Link } from "react-router-dom";
import DarkModeContext from "../Context/ModeContext";

import styles from "./SideBar.module.css";

const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const ligthModeHandler = () => {
    dispatch({ type: "LIGHT" });
  };
  const darkModeHandler = () => {
    dispatch({ type: "DARK" });
  };
  return (
    <div className={styles["side-bar"]}>
      <div className={styles["top-bar"]}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>KyleDash</span>
        </Link>
      </div>
      <hr />
      <div className={styles["center-bar"]}>
        <SideBarList />
      </div>
      <div className={styles["bottom-bar"]}>
        <div
          className={styles["color-options"]}
          onClick={ligthModeHandler}
        ></div>
        <div
          className={styles["color-options"]}
          onClick={darkModeHandler}
        ></div>
      </div>
    </div>
  );
};

export default SideBar;
