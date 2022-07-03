import React from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import Widgets from "../../Components/Widgets/Widgets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles["home-container"]}>
        <NavBar />
        <div className={styles.widgets}>
        <Widgets/>
        <Widgets/>
        <Widgets/>
        <Widgets/>
        </div>
      </div>
    </div>
  );
};

export default Home;
