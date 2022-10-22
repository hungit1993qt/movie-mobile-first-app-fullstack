import styles from "Assets/SCSS/CinimaGroup/CinimaGroup.module.scss";
import { useState } from "react";
import PopupListMovie from "Components/CinimaGroup/ListMovie";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Cinema } from "Interface/Cinema";

function CinimaGroup() {
  const [showPopupListMovie, setShowPopupListMovie] = useState(false);
  const [dataCinema, setDataCinema] = useState<Cinema>();
  const { cinemaBrand } = useSelector((state: RootState) => state.movie);

  return (
    <section className={styles["CinimaGroup"]}>
      <PopupListMovie
        trigger={showPopupListMovie}
        setTrigger={setShowPopupListMovie}
        dataCinema={dataCinema as Cinema}
      />

      <div className={styles["CinimaGroup-Content"]}>
        <h1 className={styles["title"]}>list brand cinema</h1>
        <div className={styles["Content"]}>
          <div className={styles["tabs"]}>
            {cinemaBrand?.map((cinemaBrand, index) => {
              return (
                <div className={styles["tab"]} key={index}>
                  <input
                    type="radio"
                    name="css-tabs"
                    id={`tab-${index + 1}`}
                    className={styles["tab-switch"]}
                  />
                  <label
                    htmlFor={`tab-${index + 1}`}
                    className={styles["tab-label"]}
                  >
                    <img
                      src={`${cinemaBrand.logoCinemaBrand}`}
                      alt={cinemaBrand.nameCinemaBrand}
                    />
                  </label>
                  <div className={styles["tab-content"]}>
                    {cinemaBrand.cinemas.map((cinema: Cinema, index) => {
                      return (
                        <div
                          onClick={() => {
                            setShowPopupListMovie(true);
                            setDataCinema(cinema as Cinema);
                          }}
                          className={styles["cinima-location"]}
                          key={index}
                        >
                          <p>{cinema.nameCinema}</p>
                          <span>{cinema.addressCinema}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinimaGroup;
