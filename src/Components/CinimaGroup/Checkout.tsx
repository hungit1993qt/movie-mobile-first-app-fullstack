import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/ListShowTime.module.scss";
import PopupShowSeat from "Components/CinimaGroup/ListSeat";
type Props = {
  trigger: boolean;

  setTrigger: any;
};

const ListShowTime = (props: Props) => {
  const [showPopupSeat, setShowPopupSeat] = useState(false);
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <PopupShowSeat trigger={showPopupSeat} setTrigger={setShowPopupSeat} />
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
        <div className={styles["list-showtimes"]}>
          <div className={styles["showtimes"]}>
            <div className={styles["title-showtimes"]}>
              <span>2D</span>
            </div>
            <span onClick={()=>setShowPopupSeat(true)} className={styles["Times"]}>10:30</span>
            <span className={styles["Times"]}>12:30</span>
            <span className={styles["Times"]}>14:10</span>
            <span className={styles["Times"]}>19:40</span>
          </div>
          <div className={styles["showtimes"]}>
            <div className={styles["title-showtimes"]}>
              <span>3D</span>
            </div>
            <span className={styles["Times"]}>11:40</span>
            <span className={styles["Times"]}>13:20</span>
            <span className={styles["Times"]}>15:50</span>
            <span className={styles["Times"]}>20:10</span>
          </div>
          <div className={styles["showtimes"]}>
            <div className={styles["title-showtimes"]}>
              <span>4D</span>
            </div>
            <span className={styles["Times"]}>11:40</span>
            <span className={styles["Times"]}>13:20</span>
            
          </div>
          <div className={styles["showtimes"]}>
            <div className={styles["title-showtimes"]}>
              <span>5D</span>
            </div>
            <span className={styles["Times"]}>11:40</span>
            <span className={styles["Times"]}>13:20</span>
            <span className={styles["Times"]}>15:50</span>
            
          </div>
        </div>
        
      </div>
    </div>
  ) : null;
};

export default ListShowTime;
