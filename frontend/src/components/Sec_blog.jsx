import React from "react";
import Blog_page from "./Blog_page";
import Article_card from "./Article_card";
import "../css/Sec_blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Sec_blog = () => {
  return (
    <>
      <Navbar />
      <div className="sec_blog_div1">
        <Blog_page />
        <Article_card />
      </div>
      <Footer />
    </>
  );
};

export default Sec_blog;
