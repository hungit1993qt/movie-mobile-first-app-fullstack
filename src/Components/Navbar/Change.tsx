import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Change.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const Change = (props: Props) => {
  const navigate = useNavigate();
  return props.trigger ? (
    <div className={styles["popup-information"]}>
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(false)}
          className={styles["close-btn"]}
        >
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["Information"]}>
          <div className={styles["title-info"]}>
            <i className="fa fa-info-circle"></i>
            <b>CHANGE</b>
          </div>
          <form action="">
            <div>
              <label htmlFor="account">OLD PASSWORD</label>
              <b> **********</b>
            </div>
            <div>
              <label htmlFor="account">NEW PASSWORD</label>
              <b> *******</b>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default Change;
