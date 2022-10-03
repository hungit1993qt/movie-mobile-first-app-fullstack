import styles from "Assets/SCSS/Carousel/Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = () => {
  return (
    <section className={styles["Carousel"]}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src="/images/p2.jpg" />
        </SwiperSlide>
        <SwiperSlide
          className={`${styles["swiper-slide"]} swiper-slide-active`}
        >
          <img src="/images/p1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img src="/images/p3.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
