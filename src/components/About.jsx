import React from "react";

import { skills } from "../constants";
import { styles } from "../styles";

const SkillCard = ({name, description, icon }) => {
  return (
    <div className="basis-1/3 flex flex-row items-center my-5">
      <div className="mx-3">
        <img 
          src={icon}
          alt="skill-icon"
          className="object-cover w-16 h-16"
        />
      </div>

      <div className="flex flex-col">
        <h3>
          {name}
        </h3>
        <h3>
          {description}
        </h3>
      </div>
    </div>
  )
}

const About = () => {
  return(
    <section className="mt-40">
      <div>
        <p className={`${styles.sectionSubText}`}>
          About Me
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Introduction
        </h2>
        <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
          I'm a skilled software developer with experience in Python and
          JavaScript, and expertise in frameworks like React, Node, and
          Django. Served as team lead several times with proven record of 
          high-quality software delivery. I'm a quick learner and collaborate 
          closely with clients to create efficient, scalable, and user-friendly 
          solutions that solve real-world problems. 
        </p>
      </div>
      <div className="mt-16 flex flex-wrap">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default About;

