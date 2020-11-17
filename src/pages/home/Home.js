import React from "react";
import styles from "../../scss/home.module.scss";

//import components
import {
  Navbar,
  Footer,
  HeaderPhoto,
  ContentHeader,
  SpaceVer,
  EventTimeline,
} from "../../components";
import { useHistory } from "react-router-dom"; // import react-router-dom components
import { Judul, Tahun } from "../../assets";
import { Button, Divider } from "antd";

const Home = () => {
  let history = useHistory();
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <HeaderPhoto />
      <div className={styles.content}>
        <ContentHeader
          title={Judul.judul3}
          subtitle={`Apa sih ${Judul.judul3} ?`}
        />
        <SpaceVer space={20} />
        <p className={styles.deskripsi}>{Judul.deskripsi}</p>
        <Divider />
        <ContentHeader
          title={`Timeline ${Judul.judul1} ${Tahun}`}
          subtitle={`Rangkaian Kegiatan ${Judul.judul1} ${Tahun}`}
          timeline
        />
        <SpaceVer space={20} />
        <EventTimeline />
        <SpaceVer space={10} />
        <p className={styles.info}>
          *Jadwal dapat berubah sewaktu-waktu menyesuaikan situasi dan kondisi
          yang terjadi
        </p>
        <SpaceVer space={30} />
        <div className={styles.buttonWrapper}>
          <Button
            type="primary"
            size="large"
            onClick={() => history.push("/daftar")}
          >
            Daftar
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
