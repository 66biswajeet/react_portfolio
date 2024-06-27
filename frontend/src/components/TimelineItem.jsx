import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/TimelineItem.css";

import React from "react";

const TimelineElement = (val) => {
  console.log(val.background);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: `${val.background}`, color: "white" }}
      contentArrowStyle={{ borderRight: `7px solid ${val.background}` }}
      iconStyle={{
        background: `${val.background}`,
        color: "white",
      }}
      icon={val.icon}
    >
      <h3 className="vertical-timeline-element-title  addon">{val.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{val.subtitle}</h4>
      <p className="addp">{val.description}</p>
      {val.type && (
        <p className="vertical-timeline-element-type">
          <strong>Type: </strong>
          {val.type}
        </p>
      )}
    </VerticalTimelineElement>
  );
};

const TimelineItem = ({ Apidata, filterById }) => {
  const filteredData = Apidata.filter((item) => item.type === filterById);
  return (
    <VerticalTimeline lineColor={"#edebf0"}>
      {filteredData.map((element, index) => (
        <TimelineElement key={index} {...element} />
      ))}
    </VerticalTimeline>
  );
};

export default TimelineItem;
