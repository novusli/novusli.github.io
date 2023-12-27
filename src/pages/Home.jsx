import React from "react";
import { Projects, Header, About, Experience } from "../components";

const Home = () => {
  return(
    <div className="bg-img bg-auto">
      <div className="px-16">
      <Header />
      <Projects />
      <About />
      <Experience />
      </div>
    </div>

  );
};

export default Home;