import React from "react";
import styles from "./sideBarList.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PsychologyIcon from "@mui/icons-material/Psychology";
const SideBarList = () => {
  return (
    <ul className={styles.list}>
      <p className={styles.title}>main</p>
      <li>
        <DashboardIcon className={styles.icon} />
        <span>DashBoard</span>
      </li>
      <p className={styles.title}>list</p>
      <li>
        <GroupIcon className={styles.icon} />
        <span>Users</span>
      </li>
      <li>
        <ProductionQuantityLimitsIcon className={styles.icon} />
        <span>Products</span>
      </li>
      <li>
        <BorderColorIcon className={styles.icon} />
        <span>Orders</span>
      </li>
      <li>
        <LocalShippingIcon className={styles.icon} />
        <span>Delivery</span>
      </li>
      <p className={styles.title}>useful links</p>
      <li>
        <EqualizerIcon className={styles.icon} />
        <span>Stats</span>
      </li>
      <li>
        <NotificationsIcon className={styles.icon} />
        <span>Notifications</span>
      </li>
      <p className={styles.title}>services</p>
      <li>
        <SettingsSystemDaydreamIcon className={styles.icon} />
        <span>System Health</span>
      </li>
      <li>
        <PsychologyIcon className={styles.icon} />
        <span>Logs</span>
      </li>
      <li>
        <SettingsIcon className={styles.icon} />
        <span>Settings</span>
      </li>
      <p className={styles.title}>users</p>
      <li>
        <AccountCircleIcon className={styles.icon} />
        <span>Profile</span>
      </li>
      <li>
        <LogoutIcon className={styles.icon} />
        <span>LogOut</span>
      </li>
    </ul>
  );
};

export default SideBarList;
