import React from "react";
import DataTable from "../../Components/datatable/DataTable";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import styles from "./List.module.css";

const List = () => {
  return (
    <div className={styles.list}>
      <SideBar />
      <div className={styles["list-container"]}>
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
