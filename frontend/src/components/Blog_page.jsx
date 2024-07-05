import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Blog_page.css";

import DOMPurify from "dompurify";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Blog_page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/card");
        setPosts(
          response.data.map((post) => ({
            ...post,
            content: DOMPurify.sanitize(post.content),
          }))
        );
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const newposts = posts.filter((item) => item._id === id);

  return (
    <>
      {isLoading ? (
        <div>Post is Loading.....</div>
      ) : (
        <div className="blog-post-container">
          {newposts.length > 0 && (
            <div className="blog-post">
              <div className="img_div">
                <h1 className="title_post">{newposts[0].title}</h1>
                <img
                  className="main_img"
                  src="https://tse4.mm.bing.net/th?id=OIG4.8mVgJpXD0D.9OcF9Ymj0&pid=ImgGn"
                  alt="post img"
                />
              </div>

              <p className="summary">{newposts[0].text}</p>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: newposts[0].content }}
              />
            </div>
          )}
          {!newposts.length && <p>Post not found.</p>}

          {!newposts.length && id && (
            <p>Error: Post not found with ID: {id}.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Blog_page;