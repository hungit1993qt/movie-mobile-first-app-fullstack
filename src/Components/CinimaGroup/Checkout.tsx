import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/Checkout.module.scss";
import PopupShowPay from "Components/CinimaGroup/Pay";
type Props = {
  trigger: boolean;

  setTrigger: any;
};

const ListShowTime = (props: Props) => {
  const [showPopupPay, setShowPopupPay] = useState(false);
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <PopupShowPay trigger={showPopupPay} setTrigger={setShowPopupPay} />
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
        <div className={styles["checkout-detail"]}>
          <div className={styles["detail-title"]}>
            <b>No.</b>
            <b>Seat</b>
            <b>Type</b>
            <b>Price</b>
          </div>
          <div className={styles["detail-content"]}>
            <div className={styles["seat-booked"]}>
              <b>1</b>
              <b>D1</b>
              <b>VIP</b>
              <b>75$</b>
            </div>
            <div className={styles["seat-booked"]}>
              <b>2</b>
              <b>D2</b>
              <b>VIP</b>
              <b>75$</b>
            </div>
            <div className={styles["seat-booked"]}>
              <b>3</b>
              <b>D3</b>
              <b>VIP</b>
              <b>75$</b>
            </div>
            <div className={styles["seat-booked"]}>
              <b>4</b>
              <b>D1</b>
              <b>ECO</b>
              <b>60$</b>
            </div>
            <div className={styles["seat-booked"]}>
              <b>5</b>
              <b>D5</b>
              <b>ECO</b>
              <b>60$</b>
            </div>
          </div>
          <div className={styles["total-detail"]}>
            <div className={styles["total"]}>
              <b>Total:</b>

              <b>355$</b>
            </div>
          </div>
          <div className={styles["type-pay"]}>
            <form action="">
              <div className={styles["type"]}>
                <img src="images/mono.jpg" alt="" />
                <input type="radio" name="type" />
              </div>
              <div className={styles["type"]}>
                <img src="images/mb.png" alt="" />
                <input type="radio" name="type" />
              </div>
              <div className={styles["type"]}>
                <img src="images/pp.webp" alt="" />
                <input type="radio" name="type" />
              </div>
              <div className={styles["type"]}>
                <img src="images/amazon.png" alt="" />
                <input type="radio" name="type" />
              </div>
              <div className={styles["type"]}>
                <img src="images/qr.png" alt="" />
                <input type="radio" name="type" />
              </div>
            </form>
            <i onClick={()=>setShowPopupPay(true)} className="fab fa-cc-amazon-pay"></i>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ListShowTime;
