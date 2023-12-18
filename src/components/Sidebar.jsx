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
    <div className={`bg-[#1f2b3e] min-h-screen ${!isCollapsed ? "w-72" : "w-16"} duration-500 py-4 rounded-none`}>
      <div className={`mb-2 flex items-center justify-between gap-4 p-4`}>
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
      <div className={`mt-4 ${!isCollapsed ? "pl-16" : "pl-2"} flex flex-col gap-4 text-white relative`}>
        <Link to="/" className="group flex items-center p-2 hover:bg-gray-800 rounded-md">
          <div>
            <ImHome className="w-5 h-5" />
          </div>
          <h2 className={`whitespace-pre ${isCollapsed && "opacity-0 overflow-hidden"}`}>
            Home
          </h2>
        </Link>
        {
          !isCollapsed && (
            <Typography>
              Projects
            </Typography>
          )
        }
        
        {sidebarList?.map((listItem, i) => (
          <Link 
            to={listItem?.link}
            key={i}
            className={`${listItem?.margin && "mt-4"} group flex items-center p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>
              {createElement(listItem?.icon, { className: "w-5 h-5"})}
            </div>
            <h2 className={`whitespace-pre ${isCollapsed && "opacity-0 overflow-hidden"}`}>
              {listItem?.name}
            </h2>
          </Link>
        ))}
        
      </div>
      
    </div>
  );
}

export default Sidebar;
