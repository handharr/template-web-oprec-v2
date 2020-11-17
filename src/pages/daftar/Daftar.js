import React, { useState } from "react";
import styles from "../../scss/daftar.module.scss";

//import components
import { Navbar, Footer, SpaceVer } from "../../components";
import { useHistory } from "react-router-dom"; // import react-router-dom components
import { Tooltip, Avatar, Button, Checkbox } from "antd";
import { BemLogo, Langkah, Judul, Tahun } from "../../assets";

const Item = ({ number, title, desc }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.number}>
        <h1>{number}</h1>
      </div>
      <div className={styles.itemContent}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <h6 className={styles.itemDesc}>{desc}</h6>
      </div>
    </div>
  );
};

const Daftar = () => {
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState(false);
  let history = useHistory();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Avatar size={400} src={BemLogo} />
        </div>
        <div className={styles.rightContent}>
          <header>
            Prosedur Pendaftaran Online Calon {Judul.judul3} {Tahun}
          </header>
          <SpaceVer space={20} />
          <table>
            {Langkah.map((val, i) => {
              return (
                <tr>
                  <Item {...val} number={i + 1} />
                </tr>
              );
            })}
          </table>
          <SpaceVer space={20} />
          <header>Silahkan baca dan download berkas offline berikut!</header>
          <SpaceVer space={25} />
          <div className={styles.buttonWrapper}>
            <Button type="primary" size="large">
              Berkas Offline
            </Button>
          </div>
          <SpaceVer space={20} />
          <div className={styles.ceckboxWrapper}>
            <p className={styles.checkboxHeader}>Let's Start Our Journey!</p>
            <Tooltip
              title="Silahkan chekclist terlebih dahulu!!"
              visible={err}
              color="red"
              placement="bottomLeft"
            >
              <Checkbox
                onChange={() => {
                  setChecked((prev) => !prev);
                  setErr(false);
                }}
                checked={checked}
              >
                Saya telah membaca, menyetujui, dan siap mengikuti alur
                pendaftaran serta amanah pada setiap proses didalamnya
              </Checkbox>
            </Tooltip>
            <SpaceVer space={25} />
            <div className={styles.buttonWrapper}>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  if (checked) {
                    history.push("/login");
                  } else {
                    setErr(true);
                  }
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Daftar;
