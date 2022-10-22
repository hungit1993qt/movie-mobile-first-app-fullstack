import styles from "Assets/SCSS/HomePage.module.scss";
import Carousel from "Components/Carousel/Carousel";
import HotRank from "Components/HotRank/HotRank";
import NewMovie from "Components/NewsMovie/NewMovie";
import CinimaGroup from "Components/CinimaGroup/CinimaGroup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { getAllMovie, getAllCinemaBrand } from "Slices/movie";
import { useEffect } from "react";
import PageLoading from "Components/PageLoading/PageLoading";
const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllMovie());
    dispatch(getAllCinemaBrand());
  }, []);
  const { isLoading } = useSelector((state: RootState) => state.movie);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-mobile">
      <h1 className={styles["title"]}>cinimax future</h1>
      <Carousel />
      <NewMovie />
      <HotRank />
      <CinimaGroup />
    </div>
  );
};

export default HomePage;
