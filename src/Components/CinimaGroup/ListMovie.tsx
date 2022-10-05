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
        {props.dataMovie.map((movie)=>{
          return(
            <h1 onClick={()=>setShowPopupTime(true)}>{movie.title}</h1>
          )
        })}
      </div>
    </div>
  ) : null;
};

export default ListMovie;
