import styles from "Assets/SCSS/CinimaGroup/CinimaGroup.module.scss";

function CinimaGroup() {
  return (
    <section className={styles["CinimaGroup"]}>
      <div className={styles["CinimaGroup-Content"]}>
        <h1 className={styles["title"]}>hot rank</h1>
        <div className={styles["Content"]}>
          <div className={styles["tabs"]}>
            <div className={styles["tab"]}>
              <input
                type="radio"
                name="css-tabs"
                id="tab-1"
                defaultChecked
                className={styles["tab-switch"]}
              />
              <label htmlFor="tab-1" className={styles["tab-label"]}>
                <img src="images/b1.jpg" alt="" />
              </label>
              <div className={styles["tab-content"]}>
                1
              </div>
            </div>
            <div className={styles["tab"]}>
              <input
                type="radio"
                name="css-tabs"
                id="tab-2"
                defaultChecked
                className={styles["tab-switch"]}
              />
              <label htmlFor="tab-2" className={styles["tab-label"]}>
                <img src="images/b2.png" alt="" />
              </label>
              <div className={styles["tab-content"]}>2</div>
            </div>
            <div className={styles["tab"]}>
              <input
                type="radio"
                name="css-tabs"
                id="tab-3"
                defaultChecked
                className={styles["tab-switch"]}
              />
              <label htmlFor="tab-3" className={styles["tab-label"]}>
                <img src="images/b3.png" alt="" />
              </label>
              <div className={styles["tab-content"]}>3</div>
            </div>
            <div className={styles["tab"]}>
              <input
                type="radio"
                name="css-tabs"
                id="tab-4"
                defaultChecked
                className={styles["tab-switch"]}
              />
              <label htmlFor="tab-4" className={styles["tab-label"]}>
                <img src="images/b4.png" alt="" />
              </label>
              <div className={styles["tab-content"]}>4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinimaGroup;
