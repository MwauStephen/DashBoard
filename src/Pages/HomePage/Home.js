import React from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles["home-container"]}>
        <NavBar />
        home content
      </div>
    </div>
  );
};

export default Home;
