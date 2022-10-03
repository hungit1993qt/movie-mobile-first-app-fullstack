import styles from "Assets/SCSS/NewsMovie/NewsMovie.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
const NewMovie = () => {
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
              src="images/p4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles["SwiperSlide"]}>
            <img
              className={styles["Img-NewsMovie"]}
              src="images/p6.jpg"
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
        </Swiper>
      </div>
    </section>
  );
};

export default NewMovie;
