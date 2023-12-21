import React from "react";
import { Sidebar } from "./components";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
