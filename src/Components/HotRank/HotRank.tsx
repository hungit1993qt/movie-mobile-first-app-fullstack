import styles from "Assets/SCSS/NewsMovie/NewsMovie.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Movie } from "Interface/movie";
import { useNavigate } from "react-router-dom";
import PageLoading from "Components/PageLoading/PageLoading";
const HotRank = () => {
  const { movies, isLoading } = useSelector((state: RootState) => state.movie);
  const navigate = useNavigate();
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <section className={styles["NewsMovie"]}>
      <div className={styles["NewsMovie-Content"]}>
        <h1 className={styles["title"]}>hot rank</h1>
        <Swiper
          freeMode={true}
          slidesPerView={2.5}
          spaceBetween={15}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {movies?.map((hotMovie: Movie, index) => {
            if (hotMovie.hotMovie) {
              return (
                <SwiperSlide
                  onClick={() => navigate(`/detail/${hotMovie.slugMovie}`)}
                  key={index}
                  className={styles["SwiperSlide"]}
                >
                  <img
                    className={styles["Img-NewsMovie"]}
                    src={`${hotMovie.thumbnailMovie}`}
                    alt={hotMovie.slugMovie}
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HotRank;
