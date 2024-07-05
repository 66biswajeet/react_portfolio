import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Preloader from "./preloader/Preloader";

import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Navbar = lazy(() => import("./admin/Navbar"));

import Blog from "./admin/Blog";

function Admin() {
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
        </div>
      )}
    </Suspense>
  );
}

export default Admin;
