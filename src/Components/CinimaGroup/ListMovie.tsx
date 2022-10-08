import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/ListMovie.module.scss";
import PopupShowTime from "Components/CinimaGroup/ListShowTime";
type Props = {
  trigger: boolean;
  setTrigger: any;
  dataMovie: [
    {
      title: string;
      address: string;
    }
  ];
};

const ListMovie = (props: Props) => {
  const [showPopupTime, setShowPopupTime] = useState(false);
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <PopupShowTime trigger={showPopupTime} setTrigger={setShowPopupTime} />
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(null)}
          className={styles["close-btn"]}
        >
          <i className="fa fa-times-circle"></i>
        </button>
        <div className={styles["list-content"]}>
          <div className={styles["info-cinima"]}>
            <span className={styles["name-cinima"]}>
              CGV - Vincom - Đà Nẵng
            </span>
            <span className={styles["address-cinima"]}>
              Tầng 1, TTTM Vincom Center B - Lê Thanh Nghị
            </span>
          </div>
          <div className={styles["list-movies"]}>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p1.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>The War 2 Monter </span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p2.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>The War 2 Monter </span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p3.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>A House is perfect</span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p1.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>The War 2 Monter </span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p2.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>The War 2 Monter </span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
            <div
              onClick={() => setShowPopupTime(true)}
              className={styles["movie-items"]}
            >
              <img src="images/p3.jpg" alt=" " />
              <div className={styles["movie-content"]}>
                <span className={styles["movie-name"]}>A House is perfect</span>
                <span className={styles["movie-description"]}>
                  6* &rsaquo; 1h 44m
                </span>
                <span className={styles["movie-description"]}>06-10-2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ListMovie;
