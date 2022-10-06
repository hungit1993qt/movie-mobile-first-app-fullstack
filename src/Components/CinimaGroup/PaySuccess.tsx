import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/PaySuccess.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const PaySuccess = (props: Props) => {
  const navigate = useNavigate();
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(false)}
          className={styles["close-btn"]}
        >
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["info-cinima"]}>
          <img src="images/p1.jpg" alt=" " />
          <div className={styles["movie-content"]}>
            <span className={styles["movie-name"]}>The War 2 Monter </span>
            <span className={styles["movie-description"]}>
              6* &rsaquo; 1h 44m
            </span>
            <span className={styles["movie-description"]}>06-10-2022</span>
          </div>
        </div>
        <div className={styles["pay-detail"]}>
          <div className={styles["total-detail"]}>
            <div className={styles["total"]}>
              <b>Total:</b>

              <b>355$</b>
            </div>
            <div className={styles["pay"]}>
              <img
                onClick={() => navigate("/list-checkout")}
                src="images/paysuccess.png"
                alt=""
              />
              <span className={styles["title"]}>Payment Success</span>
              <span className={styles["descript"]}>
                Please check the information from the email, thanks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PaySuccess;
