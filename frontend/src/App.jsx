import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";

import Section2 from "./components/Section2";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />

      <Section1 />

      <Section2 />

      <Timeline />
    </>
  );
}

export default App;
