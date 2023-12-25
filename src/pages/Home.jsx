import React from "react";
import { Projects, Header, About, Experience, StarsCanvas } from "../components";

const Home = () => {
  return(
    <div className="w-full bg-[#151b2c] px-16">
      <Header />
      <Projects />
      <About />
      <Experience />
      <StarsCanvas />
    </div>

  );
};

export default Home;