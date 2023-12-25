import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#212b3d",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631"}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.companyName}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p 
          className="text-gray-400 text-[16px] font-semibold"
          style={{ margin: 0}}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return(
    <div>
      Experience Section
      <div>
        <p className="text-center text-[14px] text-tertiary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-center text-white font-black text-[30px]">
          Work Experience
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;