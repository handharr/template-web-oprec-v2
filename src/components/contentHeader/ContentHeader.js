import React from "react";
import styles from "../../scss/contentHeader.module.scss";

//import components
import { InfoCircleFilled, ClockCircleFilled } from "@ant-design/icons";

const ContentHeader = ({ title, subtitle, timeline }) => {
  return (
    <div className={styles.wrapper}>
      {timeline ? <ClockCircleFilled /> : <InfoCircleFilled />}
      <div className={styles.titleWrapper}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default ContentHeader;
