import React, { useState } from "react";
import styles from "Assets/SCSS/Navbar/SentMessages.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const SentMessages = (props: Props) => {
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
            <i className="fab fa-facebook-messenger"></i>
            <b>SENT MESSAGES</b>
          </div>
          <form action="">
            <div>
              <label htmlFor="account">SUBJECT</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="account">CONTENT</label>
              <textarea></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default SentMessages;
