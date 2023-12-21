import React from "react";
import { Navbar, Projects, About, Experience, BallCanvas, ComputerCanvas, EarthCanvas, StarsCanvas } from "../components";

const Home = () => {
  return(
    <div className="w-full bg-gray-400">
      <Navbar />
      <Projects />
      <About />
      <ComputerCanvas />
      <BallCanvas />
      <Experience />
      <EarthCanvas />
      <StarsCanvas />
    </div>

  );
};

export default Home;