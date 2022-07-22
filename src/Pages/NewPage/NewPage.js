import React, { useState } from "react";
import NavBar from "../../Components/navBar/NavBar";
import SideBar from "../../Components/sideBar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./NewPage.module.css";

const NewPage = (props) => {
  const [file, setFile] = useState("");

  console.log(file);

  // uploading file
  const fileChangeHandler = (event) => {
    console.log(event);
    setFile(event.target.files[0]);
  };

  // form submit handler
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await addDoc(collection(db, "cities"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      code: "00100",
      Timestamp: serverTimestamp(),
    });

    console.log(response.id);
  };

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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
              }
              alt="a person"
              className={styles["new-image"]}
            />
          </div>
          <div className={styles["right"]}>
            <form onSubmit={formSubmitHandler}>
              <div className={styles["form-input"]}>
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className={styles.icon} />
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="file"
                  onChange={fileChangeHandler}
                />
              </div>
              {props.inputs.map((input) => {
                return (
                  <div className={styles["form-input"]} key={input.id}>
                    <label>{input.label}:</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}

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

{
  /* <div className={styles["form-input"]}>
                <label>UserName:</label>
                <input type="text" placeholder="your name.." />
              </div> */
}
{
  /* <div className={styles["form-input"]}>
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
              </div> */
}
