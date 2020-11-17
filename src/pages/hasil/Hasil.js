import React from "react";
import styles from "../../scss/result.module.scss";

import { Result } from "antd";
import { Footer, Navbar, SpaceVer } from "../../components";
import { TextHasil } from "../../assets";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const Hasil = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={`${styles.terdaftarContainer} ${styles.container}`}>
          <Result
            icon={<CheckCircleTwoTone />}
            title="Terima Kasih telah mendaftar"
            subTitle={TextHasil.terdaftar}
          />
        </div>
        <SpaceVer space={10} />
        <div className={`${styles.diterimaContainer} ${styles.container}`}>
          <Result
            icon={<SmileOutlined className={styles.iconDiterima} />}
            title="Selamat kamu diterima"
            subTitle={TextHasil.diterima}
          />
        </div>
        <SpaceVer space={10} />
        <div className={`${styles.ditolakContainer} ${styles.container}`}>
          <Result
            icon={<FrownOutlined className={styles.iconDitolak} />}
            title="Mohon maaf kamu belum berhasil diterima"
            subTitle={TextHasil.ditolak}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hasil;
