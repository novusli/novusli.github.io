import React from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { styles } from "../styles";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  image,
  sourceCodeLink,
  description,
  tags,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,      // max tilt rotation (degrees)
          scale: 1,     // 1=100%
          speed: 450,     // Speed of the enter/exit transition
        }}
        className="bg-[#212b3d] p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt="project image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div 
            onClick={() => window.open(sourceCodeLink, "_blank")}     // Open a new black window
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => (
              <p 
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  return(
    <section className="mt-16">
      <div>
        <p className={`${styles.sectionSubText}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects
        </h2>
      </div>

      <div className="mt-14 flex flex-wrap gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects;