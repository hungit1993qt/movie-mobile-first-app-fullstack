import React, { useState } from "react";
import styles from "Assets/SCSS/DetailMovie/Trainler.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
};

const Trainler = (props: Props) => {
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
        <div className={styles["video-trainler"]}>
          <iframe
            width={788}
            height={443}
            src="https://www.youtube.com/embed/Z1BCujX3pw8"
            title="Marvel Studios' Captain Marvel - Official Trailer"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Trainler;