import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Article_css.css";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const Article_card = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState("");

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/auth/card");
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error("There was an error fetching the posts!", error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

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
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = { title, text };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/card",
        newPost
      );
      setPosts((prevPosts) => [...prevPosts, response.data]);
      setTitle("");
      setText("");
      setContent("");
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/card/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId)); // Update state with filtered posts
    } catch (error) {
      console.error("There was an error deleting the post!", error);
    }
  };
  return (
    <div className="root" id="blog">
      {posts.map((post) => (
        <div className="article_card" key={post._id}>
          <img
            className="article_card-header"
            src="https://tse4.mm.bing.net/th?id=OIG4.8mVgJpXD0D.9OcF9Ymj0&pid=ImgGn"
          />
          <div className="article_card-content">
            <h5 className="article_card-title">{post.title}</h5>
            <p className="article_card-description">{post.text}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
          </div>
          <Link
            to={`/blog/` + post._id}
            className="article_card-footer"
            filter={post._id}
          >
            <button className="article_card-button">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Article_card;
