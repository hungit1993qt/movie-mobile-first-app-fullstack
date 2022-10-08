import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Login.module.scss";
import { useNavigate } from "react-router-dom";

const Change = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["popup-information"]}>
      <div className={styles["popup-inner"]}>
        <button onClick={()=>navigate("/")} className={styles["close-btn"]}>
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["Information"]}>
          <div className={styles["title-info"]}>
            <i className="fa fa-sign-in-alt"></i>
            <b>LOGIN</b>
          </div>
          <form action="">
            <div>
              <label htmlFor="account">ACCOUNT</label>
              <b> **********</b>
            </div>
            <div>
              <label htmlFor="account">PASSWORD</label>
              <b> *******</b>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Change;
