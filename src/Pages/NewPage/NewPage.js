import React from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import styles from "./NewPage.module.css";

const NewPage = (props) => {
  return (
    <div className={styles.new}>
      <SideBar />
      <div className={styles["new-page"]}>
        <NavBar />
        <div className={styles["new-top"]}>
          <h1 className={styles["new-title"]}>{props.title}</h1>
        </div>
        <div className={styles["new-bottom"]}>
          <div className={styles["left"]}>
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
              alt="a person"
              className={styles["new-image"]}
            />
          </div>
          <div className={styles["right"]}>
            <form>
              <div className={styles["form-input"]}>
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className={styles.icon} />
                </label>
                <input type="file" style={{ display: "none" }} id="file" />
              </div>
              {props.inputs.map((input) => {
                return (
                  <div className={styles["form-input"]} key={input.id}>
                    <label>{input.label}:</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              {/* <div className={styles["form-input"]}>
                <label>UserName:</label>
                <input type="text" placeholder="your name.." />
              </div> */}
              {/* <div className={styles["form-input"]}>
                <label>Name and SurName:</label>
                <input type="text" placeholder="your name and surname.." />
              </div>
              <div className={styles["form-input"]}>
                <label>Email:</label>
                <input type="email" placeholder="your email." />
              </div>
              <div className={styles["form-input"]}>
                <label>Phone:</label>
                <input type="number" placeholder="your phone number." />
              </div>
              <div className={styles["form-input"]}>
                <label>Password:</label>
                <input type="password" placeholder="your password." />
              </div>
              <div className={styles["form-input"]}>
                <label>Address:</label>
                <input type="text" placeholder="your address." />
              </div>
              <div className={styles["form-input"]}>
                <label>Country:</label>
                <input type="text" placeholder="your country." />
              </div> */}
              <button type="submit" className={styles.button}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
