import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "./Widget.module.css";

const Widget = (props) => {
  let data;
  const amount = 100;
  const percentage = 20;

  switch (props.type) {
    case "users":
      data = {
        title: "users",
        hasMoney: false,
        link: "view users",
        icon: <PersonOutlineOutlinedIcon className={styles.icon} />,
      };
      break;
    case "orders":
      data = {
        title: "orders",
        hasMoney: false,
        link: "view orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={styles.icon}
            style={{ backgroundColor: "#f4985a" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "earnings",
        hasMoney: true,
        link: "view  earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={styles.icon}
            style={{ backgroundColor: "#65dd91" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        hasMoney: true,
        link: "view balance",
        icon: (
          <AccountBalanceOutlinedIcon
            className={styles.icon}
            style={{ backgroundColor: "#f2e713" }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}>
          {data.hasMoney ? `${amount}` : ""}
        </span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.percentage}>
          {percentage} %
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
        {/* <PersonOutlineOutlinedIcon className={styles.icon} /> */}
      </div>
    </div>
  );
};

export default Widget;
