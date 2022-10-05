import React from "react";
import styles from "Assets/SCSS/CinimaGroup/ListSeat.module.scss";
type Props = {
  trigger: boolean;
  children: any;
  setTrigger: any;
};

const ListMovie = (props: Props) => {
  return props.trigger ? (
    <div className={styles["popup-list-movie"]}>
      <div className={styles["popup-inner"]}>
        <button
          onClick={() => props.setTrigger(null)}
          className={styles["close-btn"]}
        >
          <i className="fa fa-times-circle"></i>
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};

export default ListMovie;
