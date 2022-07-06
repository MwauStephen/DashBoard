import React from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import styles from "./SinglePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles["single-page"]}>
      <SideBar />
      <div className={styles["single-container"]}>
        <NavBar />
      </div>
    </div>
  );
};

export default SinglePage;
