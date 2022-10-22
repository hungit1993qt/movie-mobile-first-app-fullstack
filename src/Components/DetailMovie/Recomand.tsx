import styles from "Assets/SCSS/Recomand/Recomand.module.scss";
import { Movie } from "Interface/movie";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  data: Movie[];
};
const Recomand = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <section className={styles["NewsMovie"]}>
      <div className={styles["NewsMovie-Content"]}>
        <h1 className={styles["title"]}>Recomand</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          className={styles["mySwiper"]}
        >
          {data?.map((movieR: Movie, index) => {
            return (
              <SwiperSlide key={index} className={styles["SwiperSlide"]}>
                <img
                  onClick={() => navigate(`/detail/${movieR.slugMovie}`)}
                  className={styles["Img-NewsMovie"]}
                  src={`${movieR.thumbnailMovie}`}
                  alt={movieR.nameMovie}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Recomand;
