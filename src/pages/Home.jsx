import React from "react";
import { Hero, Projects, About, Experience } from "../components";

const Home = () => {
  return(
    <div className="bg-primary">
      <div className="px-16">
      <Hero />
      <Projects />
      <About />
      <Experience />
      </div>
    </div>

  );
};

export default Home;