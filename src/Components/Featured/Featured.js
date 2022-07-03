import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles["featured-chart"]}>
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>

        <p className={styles["featured-title"]}>Total sales made</p>
        <p className={styles["featured-amount"]}>$500</p>
        <p className={styles["featured-description"]}>
          Previous transactions.Last payments may not be included
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <h3 className={styles["item-title"]}>Target</h3>
            <div className={styles["item-result"]}>
              <ArrowUpwardOutlinedIcon />
              <p className={styles["item-amount"]}>21.5k</p>
            </div>
          </div>
          <div className={styles.item}>
            <h3 className={styles["item-title"]}>Last week</h3>
            <div className={styles["item-result"]}>
              <ArrowUpwardOutlinedIcon />
              <p className={styles["item-amount"]}>21.5k</p>
            </div>
          </div>
          <div className={styles.item}>
            <h3 className={styles["item-title"]}>Last month</h3>
            <div className={styles["item-result"]}>
              <ArrowDownwardOutlinedIcon />
              <p className={styles["item-amount"]}>21.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
