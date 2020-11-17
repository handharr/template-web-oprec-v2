import React from "react";
import styles from "../../scss/headerPhoto.module.scss";

import { Judul, Tahun } from "../../assets";

const HeaderPhoto = () => {
  return (
    <header
      className={styles.top}
      style={{ backgroundImage: `url("./img/home-image.png")` }}
    >
      <div className={styles.headercontain}>
        <div className={styles.welcome}>
          {Judul.judul1} {Tahun}
        </div>
        <span
          className={`${styles.arrow} ${styles.animated} ${styles.bounce}`}
        ></span>
      </div>
    </header>
  );
};

export default HeaderPhoto;
