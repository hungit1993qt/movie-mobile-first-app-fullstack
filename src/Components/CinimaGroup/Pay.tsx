import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/Pay.module.scss";
import PopupPay from "Components/CinimaGroup/Pay";
type Props = {
  trigger: boolean;

  setTrigger: any;
};

const Pay = (props: Props) => {
  const [showPopupSeat, setShowPopupSeat] = useState(false);
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <PopupPay trigger={showPopupSeat} setTrigger={setShowPopupSeat} />
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(null)}
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
              <span className={styles["time-out"]}>Time out: 05:00 s</span>
              <img src="images/momoqr.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Pay;
