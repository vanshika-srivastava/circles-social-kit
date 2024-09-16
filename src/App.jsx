import React, { useState,useEffect } from "react";
import LoginComponent from "./circles-components/LoginComponent";

function App() {
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-orange-500">
      <div className="container flex flex-col items-center justify-center space-y-10 px-10 md:px-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Using Circles Social Kit on Gnosis Chain
          </h1>
        </div>
        <div className="text-center space-y-10">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get your circles avatar setup with a simple login!
          </h1>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
