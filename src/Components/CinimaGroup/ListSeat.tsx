import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/ListSeat.module.scss";
import PopupShowCheckout from "Components/CinimaGroup/Checkout";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const ListSeat = (props: Props) => {
  const [showPopupCheckout, setShowPopupCheckout] = useState(false);
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <PopupShowCheckout
        trigger={showPopupCheckout}
        setTrigger={setShowPopupCheckout}
      />
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
        <div className={styles["list-seats"]}>
          <div className={styles["seats"]}>
            <div className={styles["seat"]}>
              <span>A1</span>
            </div>
            <div className={styles["seat"]}>
              <span>A2</span>
            </div>
            <div className={styles["seat"]}>
              <span>A3</span>
            </div>
            <div className={styles["seat"]}>
              <span>A4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>A5</span>
            </div>
            <div className={styles["seat"]}>
              <span>A6</span>
            </div>
            <div className={styles["seat"]}>
              <span>A7</span>
            </div>
            <div className={styles["seat"]}>
              <span>A8</span>
            </div>
            <div className={styles["seat"]}>
              <span>B1</span>
            </div>
            <div className={styles["seat"]}>
              <span>B2</span>
            </div>
            <div className={styles["seat"]}>
              <span>B3</span>
            </div>
            <div className={styles["seat"]}>
              <span>B4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>B5</span>
            </div>
            <div className={styles["seat"]}>
              <span>B6</span>
            </div>
            <div className={styles["seat"]}>
              <span>B7</span>
            </div>
            <div className={styles["seat"]}>
              <span>B8</span>
            </div>
            <div className={styles["seat"]}>
              <span>C1</span>
            </div>
            <div className={styles["seat"]}>
              <span>C2</span>
            </div>
            <div className={styles["seat"]}>
              <span>C3</span>
            </div>
            <div className={styles["seat"]}>
              <span>C4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>C5</span>
            </div>
            <div className={styles["seat"]}>
              <span>C6</span>
            </div>
            <div className={styles["seat"]}>
              <span>C7</span>
            </div>
            <div className={styles["seat"]}>
              <span>C8</span>
            </div>
            <div className={styles["seat"]}>
              <span>D1</span>
            </div>
            <div className={styles["seat"]}>
              <span>D2</span>
            </div>
            <div className={styles["seat"]}>
              <span>D3</span>
            </div>
            <div className={styles["seat"]}>
              <span>D4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>D5</span>
            </div>
            <div className={styles["seat"]}>
              <span>D6</span>
            </div>
            <div className={styles["seat"]}>
              <span>D7</span>
            </div>
            <div className={styles["seat"]}>
              <span>D8</span>
            </div>
            <div className={styles["seat"]}>
              <span>E1</span>
            </div>
            <div className={styles["seat"]}>
              <span>E2</span>
            </div>
            <div className={styles["seat"]}>
              <span>E3</span>
            </div>
            <div className={styles["seat"]}>
              <span>E4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>E5</span>
            </div>
            <div className={styles["seat"]}>
              <span>E6</span>
            </div>
            <div className={styles["seat"]}>
              <span>E7</span>
            </div>
            <div className={styles["seat"]}>
              <span>E8</span>
            </div>
            <div className={styles["seat"]}>
              <span>F1</span>
            </div>
            <div className={styles["seat"]}>
              <span>F2</span>
            </div>
            <div className={styles["seat"]}>
              <span>F3</span>
            </div>
            <div className={styles["seat"]}>
              <span>F4</span>
            </div>{" "}
            <div className={styles["seat"]}>
              <span>F5</span>
            </div>
            <div className={styles["seat"]}>
              <span>F6</span>
            </div>
            <div className={styles["seat"]}>
              <span>F7</span>
            </div>
            <div className={styles["seat"]}>
              <span>F8</span>
            </div>
          </div>
          <div className={styles["seat-note"]}>
            <i className="fa fa-sign-out-alt"></i>
            <div className={styles["seat"]}><span>V</span></div>
            <div className={styles["seat"]}>
              <span>ECO</span>
            </div>
            <div className={styles["seat"]}>
              <span>VIP</span>
            </div>
            <div className={styles["seat"]}>
              <span>X</span>
            </div>
            <i className="fa fa-sign-out-alt"></i>
          </div>
          <div className={styles["seat-select"]}>
            <b>Chosed: </b>
            <span>D1, </span>
            <span>D2, </span>
            <span>D3, </span>
            <span>D4, </span>
            <span>D5 </span>
          </div>
          <div className={styles["checkout"]}>
            <i onClick={()=>setShowPopupCheckout(true)} className="fa fa-money-check-alt"></i>
            checkout
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ListSeat;
