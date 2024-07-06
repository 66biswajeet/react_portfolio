import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/Blog.css";
import "../css/Article_css.css";
import JoditEditor from "jodit-react";
import DOMPurify from "dompurify"; // Library for sanitizing HTML
import Navbar from "./Navbar";

const Blog = () => {
  const editor = useRef(null);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://biswajeetbackend.onrender.com/api/auth/card"
        );
        setPosts(
          response.data.map((post) => ({
            ...post,
            content: DOMPurify.sanitize(post.content),
          }))
        );
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = { title, text, content, img };

    try {
      const response = await axios.post(
        "https://biswajeetbackend.onrender.com/api/auth/card",
        newPost
      );
      setPosts((prevPosts) => [...prevPosts, response.data]);
      setTitle("");
      setText("");
      setContent("");
      setImg("");
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(
        `https://biswajeetbackend.onrender.com/api/auth/card/${postId}`
      );
      setPosts(posts.filter((post) => post._id !== postId)); // Update state with filtered posts
    } catch (error) {
      console.error("There was an error deleting the post!", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Blog Posts</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Summary"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <JoditEditor
            className="jodit"
            config={{ theme: "dark" }}
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="root">
          {posts.map((post) => (
            <div className="article_card" key={post._id}>
              <div className="article_card-header"></div>
              <div className="article_card-content">
                <h5 className="article_card-title">{post.title}</h5>
                <p className="article_card-description">{post.text}</p>
              </div>
              <div className="article_card-footer">
                <button className="article_card-button">Read More</button>
                <button
                  className="article_card-button"
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
