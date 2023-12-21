import React from "react";
import { HiLanguage } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return(
    <div className="flex justify-end">
      <div className="p-2">
        <HiLanguage className="h-6 w-6 text-white" />
      </div>
      <div className="p-2">
        <MdDarkMode className="h-6 w-6 text-white" />
      </div>
      
    </div>
  )
}

export default Navbar;