import React, { useState } from "react";
import styles from "Assets/SCSS/DetailMovie/Trainler.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  trigger: boolean;
  setTrigger: any;
  dataTrainler: string;
};
const convertURL = (str: string) => {
  return str.slice(str.indexOf("e/") + 2);
};

const Trainler = (props: Props) => {
  const { dataTrainler } = props;
  let URL = dataTrainler;
  if (dataTrainler) {
    URL = convertURL(URL);
  }

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
            src={`https://www.youtube.com/embed/${URL}`}
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
