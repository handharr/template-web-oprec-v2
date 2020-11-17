import React from "react";
import styles from "../../scss/navbar.module.scss";

// import components
import { Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { LogoBem } from "../../assets";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/">
        <HomeOutlined />
      </a>
      <Avatar size={64} src={LogoBem} />
    </div>
  );
};

export default Navbar;
