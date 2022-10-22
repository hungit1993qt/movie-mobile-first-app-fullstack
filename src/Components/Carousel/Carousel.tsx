import styles from "Assets/SCSS/Carousel/Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Movie } from "Interface/movie";

const Carousel = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(getAllMovie());
  // }, []);
  const { movies } = useSelector((state: RootState) => state.movie);

  return (
    <section className={styles["Carousel"]}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {movies?.map((listMovie: Movie, index) => {
          if (listMovie.comingMovie) {
            return (
              <SwiperSlide key={index} className={styles["swiper-slide"]}>
                <img src={`${listMovie.pictureMovie}`} alt="" />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
