import React, { createElement} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarList } from "../constants";
import { imageSize } from "../styles";
import { avatar } from "../assets";
import { ImHome } from "react-icons/im";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
    // isCollapsed mean the sidebar is closed
  const [isCollapsed, setIsCollapsed] = useState(false);

  const Avatar = ({src, alt, size="md"}) => {
    return (
      <div>
        <img className={`${imageSize[size]} block object-fill rounded-full`} src={src} alt={alt} />
      </div>
    )
  }
  
  return (
    <nav className={`${!isCollapsed ? "w-72" : "w-16"} bg-secondary min-h-screen  duration-500 px-4`}>
      <div className={`${!isCollapsed ? "justify-between" : "justify-center"} mb-2 flex  gap-4 py-4`}>
        <h2
          className={`${isCollapsed && "hidden"} text-white`}
        >
          Portfolio
        </h2>
        <div className="h-8 w-8 cursor-pointer hover:bg-gray-600 rounded-full flex  justify-center items-center">
          <MdMenu
            className="h-6 w-6 text-white" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>
        
      </div>
      {/* Info Section */}
      <div className={`${isCollapsed && "hidden"} flex flex-col m-2 w-full items-center`}>
        <Avatar 
          src={`${avatar}`}
          alt="Avatar" 
          size="md"
        />
        <h2 className="text-white text-2xl">
          Novus Li
        </h2>
        <h2 className="text-tertiary text-sm pt-4 pb-1">
          Web Developer
        </h2>
        <h2 className="text-tertiary text-sm pb-3 pt-1">
          Python Developer
        </h2>
      </div>

      {/* Sidebar List Section */}
      <div className={`${!isCollapsed && "pl-16"} mt-4  flex flex-col gap-4 relative`}>
        <Link to="/" className="group flex text-sm gap-3.5 font-medium p-2 text-white hover:bg-gray-600 rounded-md">
          <div>
            <ImHome className="w-4 h-4" />
          </div>
          <h2 className={`${isCollapsed && "opacity-0 overflow-hidden"} whitespace-pre transition delay-400`}>
            Home
          </h2>
          <h2 className={`${!isCollapsed && "hidden"} absolute left-44 bg-white font-semibold whitespace-pre
            text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:w-fit
            group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 `}>
              Home
            </h2>
        </Link>
        <h2 className={`${isCollapsed && "hidden"} text-sm font-medium text-gray-400`}>
          Projects
        </h2>
        {/* Projects Link List */}
        {sidebarList?.map((listItem, i) => (
          <Link 
            to={listItem?.link}
            key={i}
            className={`${listItem?.margin && "mt-3"} group flex text-sm gap-3.5 font-medium p-2 text-white hover:bg-gray-600 rounded-md`}
          >
            <div>
              {createElement(listItem?.icon, { className: "w-4 h-4"})}
            </div>
            <h2
              className={`${isCollapsed && "opacity-0 overflow-hidden"} whitespace-pre transition delay-400`}
            >
              {listItem?.name}
            </h2>
            {/* hover slide in tag */}
            <h2 className={`${!isCollapsed && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
            text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:w-fit
            group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 `}>
              {listItem?.name}
            </h2>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
