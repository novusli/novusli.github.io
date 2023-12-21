import React from "react";
import { HiLanguage } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return(
    <div className="flex justify-end">
      <HiLanguage className="h-6 w-6 text-gray-500" />
      <MdDarkMode className="h-6 w-6 text-gray-500" />
    </div>
  )
}

export default Navbar;