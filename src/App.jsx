import React, { useState } from "react";
import { Sidebar } from "./components";
import Home from "./pages/Home";

const App = () => {
  // isCollapsed mean the sidebar is closed
  

  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
