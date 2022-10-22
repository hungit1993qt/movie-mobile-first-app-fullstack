import styles from "Assets/SCSS/NewsMovie/NewsMovie.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Movie } from "Interface/movie";
import PageLoading from "Components/PageLoading/PageLoading";
const NewMovie = () => {
  const navigate = useNavigate();

  const { movies, isLoading } = useSelector((state: RootState) => state.movie);
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <section className={styles["NewsMovie"]}>
      <div className={styles["gr-box"]}>
        <div className={styles["col"]}>
          <button className={styles["btn-NewsMovie"]}>disney</button>
        </div>
        <div className={styles["col"]}>
          <button className={styles["btn-NewsMovie"]}>marvel</button>
        </div>
        <div className={styles["col"]}>
          <button className={styles["btn-NewsMovie"]}>Pixar</button>
        </div>
      </div>
      <div className={styles["NewsMovie-Content"]}>
        <h1 className={styles["title"]}>news movie</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {movies?.map((newMovie: Movie, index) => {
            return (
              <SwiperSlide
                onClick={() => navigate(`/detail/${newMovie.slugMovie}`)}
                key={index}
                className={styles["SwiperSlide"]}
              >
                <img
                  className={styles["Img-NewsMovie"]}
                  src={`${newMovie.thumbnailMovie}`}
                  alt={newMovie.slugMovie}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default NewMovie;
