import React from "react";
import styles from "../../scss/eventTimeline.module.scss";

//import components
import { Timeline } from "../../assets";
import { Steps } from "antd";
const { Step } = Steps;

const changeColor = (value) => {
  switch (value) {
    case 0:
      return "timeline-lime";
    case 2:
      return "timeline-green";
    default:
      return null;
  }
};

const EventTimeline = () => {
  return (
    <div className={styles.timeline}>
      <Steps
        current={0}
        direction={
          window.innerWidth <= 768 && window.innerWidth >= 500
            ? "vertical"
            : "horizontal"
        }
      >
        {Timeline.map((val) => {
          return (
            <Step
              key={val.key}
              title={val.title}
              description={val.description}
              status="process"
              className={changeColor(val.color)}
            />
          );
        })}
      </Steps>
    </div>
  );
};

export default EventTimeline;
