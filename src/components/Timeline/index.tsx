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
      <VerticalTimeline lineColor="#282a36">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#282a36", color: "#fffffe" }}
          contentArrowStyle={{ borderRight: "7px solid  #282a36" }}
          date="2023 - Present"
          iconStyle={{ background: "#282a36", color: "#fffffe" }}
          icon={<IoLogoReact />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <p>
            Design and implementation of the navigation structure between
            screens with react native
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#282a36", color: "#fffffe" }}
          contentArrowStyle={{ borderRight: "7px solid  #282a36" }}
          date="2021 - 2022"
          iconStyle={{ background: "#282a36", color: "#fffffe" }}
          icon={<IoLaptopOutline />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <p>Develop and maintain web applications</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#282a36", color: "#fffffe" }}
          contentArrowStyle={{ borderRight: "7px solid  #282a36" }}
          date="2019 - 2021"
          iconStyle={{ background: "#282a36", color: "#fffffe" }}
          icon={<IoBriefcaseOutline />}
        >
          <h3 className="vertical-timeline-element-title">Community Manager</h3>
          <p>
            Provided customer service through social media providing effective
            responses and solutions to queries and requirements
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#282a36", color: "#fffffe" }}
          contentArrowStyle={{ borderRight: "7px solid  #282a36" }}
          date="2017 - 2019"
          iconStyle={{ background: "#282a36", color: "#fffffe" }}
          icon={<SlEarphones />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Service Executive
          </h3>
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
