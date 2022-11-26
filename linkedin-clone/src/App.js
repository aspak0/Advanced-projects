import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Sidebar from "./components/app_body/Sidebar";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />

        {/* App Body */}
        <div className="app_body">
          <Sidebar />
        </div>

      </div>
    </>
  );
};

export default App;
