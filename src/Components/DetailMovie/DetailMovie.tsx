// import React, { useState } from "react";
import styles from "Assets/SCSS/DetailMovie/DetailMovie.module.scss";
import Recomand from "./Recomand";
// import { useNavigate } from "react-router-dom";
const DetailMovie = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles["detail-movie"]}>
      <div className={styles["detail"]}>
        <div className={styles["img-detail"]}>
          <img src="images/detail.webp" alt="" />
        </div>
        <div className={styles["group-btn"]}>
          <div className={styles["play-trainler"]}>
            <i className="fa fa-play"></i>
            Trainler
          </div>
          <i className="fa fa-plus-circle"></i>
          <i className="fa fa-share-alt"></i>
        </div>
        <div className={styles["content-detail"]}>
          <span className={styles["title"]}>
            2021 - 1h 30m - War, Family, Comedy, Fantasy, Animation,... HD -
            Vision - 5.1
          </span>
          <br />
          <span className={styles["description"]}>
            Sixteen bowlers are picked by the captains, forming four teams of
            five bowlers, including the captains In the mounted arms a captain
            (three, or braids) in charge of an is thus, Wakanda. Introducing
            Tenoch Huerta as Namor, king of a hidden undersea nation, the film
            also stars Dominique Thorne, Michaela Coel, Mabel Cadena and Alex
            Livanalli.
          </span>
        </div>
        <div className={styles["cast-detail"]}>
          <span className={styles["title"]}>Cast</span>
          <br />
          <span className={styles["description"]}>
            Angela Bassett, Letitia Wright, Winston Duke, Danai Gurira, Florence
            Kasumba, Lupita ...
          </span>
        </div>
      </div>
      <div className={styles["comment-movie"]}></div>
      <Recomand />
    </div>
  );
};

export default DetailMovie;