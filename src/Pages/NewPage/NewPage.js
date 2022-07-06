import React from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import styles from "./NewPage.module.css";

const NewPage = () => {
  return (
    <div className={styles.new}>
      <SideBar />
      <div className={styles["new-page"]}>
        <NavBar />
      </div>
    </div>
  );
};

export default NewPage;
