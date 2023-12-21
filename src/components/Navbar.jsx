import React from "react";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return(
    <div className={`fixed w-screen flex items-center top-0 py-3 px-6 z-20 bg-secondary`}>
      <div className="w-screen flex justify-end max-w-7xl items-center">
        <div className="px-2">
          <MdDarkMode className="text-white cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      
      
    </div>
  )
}

export default Navbar;