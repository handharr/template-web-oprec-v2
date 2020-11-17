import React from "react";
import styles from "../../scss/result.module.scss";

import { Result } from "antd";
import { Footer, Navbar } from "../../components";
// import { SmileOutlined } from "@ant-design/icons";

const Hasil = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.container}>
          <Result
            status="success"
            title="Terima Kasih telah mendaftar"
            subTitle="Pantau terus sosial media BEM Filkom untuk informasi selanjutnya"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hasil;
