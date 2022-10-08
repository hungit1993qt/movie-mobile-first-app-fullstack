import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Register.module.scss";
import { useNavigate } from "react-router-dom";
import Change from "./Change";

const Information = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["popup-information"]}>
     
      <div className={styles["popup-inner"]}>
        <button onClick={()=>navigate("/")} className={styles["close-btn"]}>
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["Information"]}>
          <div className={styles["title-info"]}>
            <b>REGISTER</b>
          </div>
          <form action="">
            <div>
              <label htmlFor="account">ACCOUNT</label>
              <b></b>
            </div>
            <div>
              <label htmlFor="account">PASSWORD</label>
              <b></b>
            </div>
            <div>
              <label htmlFor="account">EMAIL</label>
              <b></b>
            </div>
            <div>
              <label htmlFor="account">PHONE</label>
              <b></b>
            </div>
            <div className={styles["gender"]}>
              <label htmlFor="account">
                FMALE <input type="radio" name="gender" />
              </label>
              <label htmlFor="account">
                MALE <input type="radio" name="gender" />
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
