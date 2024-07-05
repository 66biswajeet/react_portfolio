import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Preloader from "./preloader/Preloader";

import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Section1 = lazy(() => import("./components/Section1"));
const Section2 = lazy(() => import("./components/Section2"));
const Timeline = lazy(() => import("./components/Timeline"));
const Section4 = lazy(() => import("./components/Section4"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  return (
    <Suspense fallback={<Preloader />}>
      {!screenLoading && (
        <div className="App">
          <Navbar />

          <Section1 />
          <Section2 />
          <Timeline />

          <Section4 />

          <Footer />
        </div>
      )}
    </Suspense>
  );
}

export default App;
