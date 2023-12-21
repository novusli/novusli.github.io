import React from "react";
import { Navbar, NavSec, Projects, About, Experience, BallCanvas, ComputerCanvas, EarthCanvas, StarsCanvas } from "../components";

const Home = () => {
  return(
    <div className="w-full">
      <NavSec />
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