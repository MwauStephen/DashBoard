import React from "react";
import SideBar from "../../Components/sideBar/SideBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles["home-container"]}>conatiner</div>
    </div>
  );
};

export default Home;
