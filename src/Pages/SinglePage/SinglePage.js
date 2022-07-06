import React from "react";
import Chart from "../../Components/Chart/Chart";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import TableData from "../../Components/table/Table";
import styles from "./SinglePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles["single-page"]}>
      <SideBar />
      <div className={styles["single-container"]}>
        <NavBar />
        <div className={styles["single-top"]}>
          <div className={styles["left"]}>
            <button className={styles["edit-button"]}>Edit</button>
            <h1 className="info-title">Information</h1>
            <div className={styles["item"]}>
              <img
                src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?cs=srgb&dl=pexels-trinity-kubassek-445109.jpg&fm=jpg"
                alt="profile"
              />
              <div className={styles["details"]}>
                <h2 className={styles["detail-title"]}>Kyle Mwau</h2>
                <div className={styles["detail-info"]}>
                  <span className={styles["info-key"]}>Email:</span>
                  <span className={styles["info-value"]}>kyle@gmail.com</span>
                </div>
                <div className={styles["detail-info"]}>
                  <span className={styles["info-key"]}>Phone:</span>
                  <span className={styles["info-value"]}>0727732542</span>
                </div>
                <div className={styles["detail-info"]}>
                  <span className={styles["info-key"]}>Address:</span>
                  <span className={styles["info-value"]}>
                    A103 Odero Street
                  </span>
                </div>
                <div className={styles["detail-info"]}>
                  <span className={styles["info-key"]}>Country:</span>
                  <span className={styles["info-value"]}>Kisumu,Kenya</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["right"]}>
            <Chart aspect={3 / 1} title="User spendings ( last 6 months)" />
          </div>
        </div>
        <div className={styles["single-bottom"]}>
          <h1 className={styles["info-title"]}>Latest transaction</h1>
          <TableData />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
