import React from "react";
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import Widget from "../../Components/Widgets/Widget";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles["home-container"]}>
        <NavBar />
        <div className={styles.widgets}>
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart />
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["list-title"]}>Latest transaction</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
