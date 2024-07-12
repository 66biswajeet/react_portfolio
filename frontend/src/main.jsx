import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Blog from "./admin/Blog.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin.jsx";
import Blog_page from "./components/Blog_page.jsx";
import Msg_pannel from "./admin/Msg_pannel.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Sec_blog from "./components/Sec_blog.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/admin/blog" element={<Blog />} />
        <Route path="/admin/contact" element={<Msg_pannel />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/blog/:id" element={<Blog_page />} /> */}
        <Route path="/blog/:id" element={<Sec_blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
