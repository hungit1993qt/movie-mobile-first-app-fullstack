import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/Hotline.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const Hotline = (props: Props) => {
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
            <i className="fa fa-phone-volume"></i>
            <b>HOTLINE</b>
          </div>
          <img src="images/phone-square-alt.png" alt="" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Hotline;
