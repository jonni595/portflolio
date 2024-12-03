import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  IoBriefcaseOutline,
  IoLaptopOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <>
      <VerticalTimeline lineColor="#00214d">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f4f6", color: "#1b2d45" }}
          contentArrowStyle={{ borderRight: "7px solid  #f2f4f6" }}
          date="2023 - Present"
          iconStyle={{ background: "#00214d", color: "#ffffff" }}
          icon={<IoLogoReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
          <p>Build and maintain web applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f4f6", color: "#1b2d45" }}
          contentArrowStyle={{ borderRight: "7px solid  #f2f4f6" }}
          date="2021 - 2023"
          iconStyle={{ background: "#00214d", color: "#ffffff" }}
          icon={<IoLaptopOutline />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">jr developer</h4>
          <p>Develop and maintain web applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f4f6", color: "#1b2d45" }}
          contentArrowStyle={{ borderRight: "7px solid  #f2f4f6" }}
          date="2019 - 2021"
          iconStyle={{ background: "#00214d", color: "#ffffff" }}
          icon={<IoBriefcaseOutline />}
        >
          <h3 className="vertical-timeline-element-title">Community Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Customer Service Executive
          </h4>
          <p>
            Provide customer service to the community by providing support and
            resolving issues
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f2f4f6", color: "#1b2d45" }}
          contentArrowStyle={{ borderRight: "7px solid  #f2f4f6" }}
          date="2017 - 2019"
          iconStyle={{ background: "#00214d", color: "#ffffff" }}
          icon={<SlEarphones />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Service Executive
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Customer Service Executive
          </h4>
          <p>
            Provide customer service to the community by providing support and
            resolving issues
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
