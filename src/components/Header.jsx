import React from "react";
import { styles } from "../styles";

const Header = () => {
  return(
    <section className="relative w-full mx-auto mt-5">
      <div className={`flex flex-row items-start gap-5 inset-0 mx-auto ${styles.paddingX}`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-20 violet-gradient" />
        </div>
        <div>
          <h2 className="text-2xl text-white mt-3">
            Hi, I'm <span className="text-tertiary">Novus</span>
          </h2>
          <h3 className="text-white">This is my Portfolio</h3>
        </div>
      </div>
      
    </section>
  )
}

export default Header;