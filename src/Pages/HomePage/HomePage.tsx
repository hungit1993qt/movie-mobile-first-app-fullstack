import styles from "Assets/SCSS/HomePage.module.scss";
import Carousel from "Components/Carousel/Carousel";
import HotRank from "Components/HotRank/HotRank";
import NewMovie from "Components/NewsMovie/NewMovie";
import CinimaGroup from "Components/CinimaGroup/CinimaGroup";
const HomePage = () => {
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
