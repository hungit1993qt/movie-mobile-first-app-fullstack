import { useEffect, useState } from "react";
import styles from "Assets/SCSS/DetailMovie/DetailMovie.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useParams } from "react-router-dom";
import { getAllMovie, getMovieDetails } from "Slices/movie";
import Recomand from "./Recomand";
import Trainler from "./Trainler";
import { Movie } from "Interface/movie";
// import { useNavigate } from "react-router-dom";
const DetailMovie = () => {
  // const navigate = useNavigate();
  const [showPopupTrainler, setShowPopupTrainler] = useState(false);
  const params = useParams();
  const slugMovie = params.key;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieDetails(slugMovie!));
    dispatch(getAllMovie());
  }, [slugMovie]);
  const { detailMovie, movies } = useSelector(
    (state: RootState) => state.movie
  );

  return (
    <div className={styles["detail-movie"]}>
      <Trainler
        trigger={showPopupTrainler}
        dataTrainler={detailMovie?.trainlerMovie as string}
        setTrigger={setShowPopupTrainler}
      />
      <div className={styles["detail"]}>
        <div className={styles["img-detail"]}>
          <img src={detailMovie?.pictureMovie} alt={detailMovie?.nameMovie} />
        </div>
        <div className={styles["group-btn"]}>
          <div
            onClick={() => setShowPopupTrainler(true)}
            className={styles["play-trainler"]}
          >
            <i className="fa fa-play"></i>
            Trainler
          </div>
          <i className="fa fa-plus-circle"></i>
          <i className="fa fa-share-alt"></i>
        </div>
        <div className={styles["content-detail"]}>
          <span className={styles["title"]}>
            {/* 2021 - 1h 30m - War, Family, Comedy, Fantasy, Animation,... HD -
            Vision - 5.1 */}
            {detailMovie?.nameMovie}
          </span>

          <span className={styles["description"]}>
            {detailMovie?.description}
          </span>
        </div>
        <div className={styles["cast-detail"]}>
          <span className={styles["title"]}>Cast</span>

          <span className={styles["description"]}>
            Angela Bassett, Letitia Wright, Winston Duke, Danai Gurira, Florence
            Kasumba, Lupita ...
          </span>
        </div>
      </div>
      <div className={styles["comment-movie"]}>
        <span className={styles["title"]}>Comment</span>
        <span className={styles["description"]}>
          <input type="text" placeholder="Submit your comment..." />
        </span>
      </div>
      <div className={styles["list-comment"]}>
        <div className={styles["comment"]}>
          <img src="images/p1.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors are very bloody...
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/avatar.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting,
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p5.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors ...
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p6.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors are very bloody...
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p1.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors are very bloody...
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p3.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting,
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p5.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors ...
          </span>
        </div>
        <div className={styles["comment"]}>
          <img src="images/p6.jpg" alt="" />
          <span className={styles["comment-content"]}>
            This movie is very interesting, the actors are very bloody...
          </span>
        </div>
      </div>
      <Recomand data={movies as Movie[]} />
    </div>
  );
};

export default DetailMovie;
