import React, { useState } from "react";
import styles from "Assets/SCSS/CinimaGroup/ListMovie.module.scss";
import PopupShowTime from "Components/CinimaGroup/ListShowTime";
import { Cinema } from "Interface/Cinema";
import { Movie } from "Interface/movie";
type Props = {
  trigger: boolean;
  setTrigger: any;
  dataCinema: Cinema;
};

const ListMovie = (props: Props) => {
  const [showPopupTime, setShowPopupTime] = useState(false);
  const { trigger, setTrigger, dataCinema } = props;

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
              {dataCinema.nameCinema}
            </span>
            <span className={styles["address-cinima"]}>
              {dataCinema.addressCinema}
            </span>
          </div>
          <div className={styles["list-movies"]}>
            {dataCinema.movies.map((listMovie: Movie, index: number) => {
              console.log(listMovie);
              return (
                <div
                  onClick={() => setShowPopupTime(true)}
                  className={styles["movie-items"]}
                  key={index}
                >
                  <img
                    src={`${listMovie.pictureMovie}`}
                    alt={listMovie.nameMovie}
                  />
                  <div className={styles["movie-content"]}>
                    <span className={styles["movie-name"]}>
                      {listMovie.nameMovie}
                    </span>
                    <span className={styles["movie-description"]}>
                      {listMovie.slugMovie}
                    </span>
                    <span className={styles["movie-description"]}>
                      {listMovie.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ListMovie;
