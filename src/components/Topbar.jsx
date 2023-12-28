import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { styles } from "../styles";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={`${styles.paddingX} ${scrolled ? "bg-black" : "bg-transparent"}
    py-3 w-full flex justify-end fixed top-0 z-20`}>
      <div className="rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-600">
        <MdOutlineDarkMode className="w-5 h-5 text-white" /> 
      </div>
    </div>
  );
};

export default Topbar;