import React from "react";
import styles from "Assets/SCSS/PageLoading/PageLoading.module.scss";
type Props = {};

const PageLoading = (props: Props) => {
  return (
    <div className={styles["spinner"]}>
      <div className={styles["blob blob-0"]}></div>
    </div>
  );
};

export default PageLoading;
