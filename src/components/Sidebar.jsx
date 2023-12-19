import React, { createElement} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, List, ListItem, ListItemPrefix, } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { ImHome, ImFolderOpen } from "react-icons/im";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  const sidebarList = [
    { name: "Project-1", link: "/", icon: ImFolderOpen, margin: true },
    { name: "Project-2", link: "/", icon: ImFolderOpen },
    { name: "Project-3", link: "/", icon: ImFolderOpen }
  ];
  // isCollapsed mean the sidebar is closed
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${!isCollapsed ? "w-72" : "w-16"} bg-[#1f2b3e] min-h-screen  duration-500 px-4`}>
      <div className={`${!isCollapsed ? "justify-between" : "justify-center"} mb-2 flex  gap-4 py-4`}>
        {
          !isCollapsed && (
            <Typography variant="h5" color="white">
              Portfolio
            </Typography>
          )
        }
        <MdMenu
          className="h-6 w-6 cursor-pointer text-white" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      {/* Info Section */}
      {
        !isCollapsed && (
          <div className="flex flex-col m-2 w-full items-center">
            <Avatar 
              src="/src/assets/Ninja.png" 
              alt="Avatar" 
              size="xxl" 
            />
            <Typography variant="h4" color="white">
              Novus Li
            </Typography>
            <Typography variant="h6" color="white">
              Web Developer
            </Typography>
            <Typography variant="h6" color="white">
              Python Developer
            </Typography>
          </div>
        )
      }

      {/* Sidebar List Section */}
      <div className={`${!isCollapsed ? "pl-16" : "pl-2"} mt-4  flex flex-col gap-4 relative`}>
        <Link to="/" className="group flex text-sm gap-3.5 font-medium p-2 text-white hover:bg-gray-800 rounded-md">
          <div>
            <ImHome className="w-4 h-4" />
          </div>
          <h2 className={`${isCollapsed && "opacity-0 overflow-hidden"} whitespace-pre`}>
            Home
          </h2>
        </Link>
        
        {
          !isCollapsed && (
            <Typography className="text-sm font-medium text-gray-400">
              Projects
            </Typography>
          )
        }
        
        {sidebarList?.map((listItem, i) => (
          <Link 
            to={listItem?.link}
            key={i}
            className={`${listItem?.margin && "mt-3"} group flex text-sm gap-3.5 font-medium p-2 text-white hover:bg-gray-800 rounded-md`}
          >
            <div>
              {createElement(listItem?.icon, { className: "w-4 h-4"})}
            </div>
            <h2
              className={`${isCollapsed && "opacity-0 overflow-hidden"} whitespace-pre duration-500`}
            >
              {listItem?.name}
            </h2>
          </Link>
        ))}
        
      </div>
      
    </div>
  );
}

export default Sidebar;
