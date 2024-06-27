import React, { useState, Suspense, lazy, useEffect } from "react";
import "./App.css";

const NavbarLazy = lazy(() => import("./components/Navbar"));
const Section1Lazy = lazy(() => import("./components/Section1"));
const Section2Lazy = lazy(() => import("./components/Section2"));
const TimelineLazy = lazy(() => import("./components/Timeline"));

const Footer = lazy(() => import("./components/Footer"));

import Preloader from "./preloader/Preloader";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <Suspense fallback={<div>Loading Navbar...</div>}>
            {" "}
            {/* Fallback for Section2 */}
            <NavbarLazy />
          </Suspense>
          <Suspense fallback={<div>Loading Section 1...</div>}>
            {" "}
            {/* Fallback for Section2 */}
            <Section1Lazy />
          </Suspense>

          <Suspense fallback={<div>Loading Section 2...</div>}>
            {" "}
            {/* Fallback for Section2 */}
            <Section2Lazy />
          </Suspense>
          <Suspense fallback={<div>Loading Section 2...</div>}>
            {" "}
            {/* Fallback for Section2 */}
            <TimelineLazy />
          </Suspense>

          <Suspense fallback={<div>Loading Timeline...</div>}>
            {" "}
            {/* Fallback for Timeline */}
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
