import styles from "Assets/SCSS/NewsMovie/NewsMovie.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
const HotRank = () => {
  return (
    <section className={styles["NewsMovie"]}>      
      <div className={styles["NewsMovie-Content"]}>
        <h1 className={styles["title"]}>hot rank</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p9.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HotRank;
