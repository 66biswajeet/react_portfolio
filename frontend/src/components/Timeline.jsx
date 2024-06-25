import React from "react";
import timelineData from "../Api/timelineData";
import TimelineItem from "./TimelineItem";
import "../css/TimelineItem.css";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
