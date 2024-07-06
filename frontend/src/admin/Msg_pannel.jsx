import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Msg_pannel.css";
import Navbar from "./Navbar";

const Msg_pannel = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://biswajeetbackend.onrender.com/api/auth/contact"
        );
        setMessages(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      await axios.delete(
        `https://biswajeetbackend.onrender.com/api/auth/contact/${messageId}`
      );
      const updatedMessages = messages.filter(
        (message) => message._id !== messageId
      );
      setMessages(updatedMessages);
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  return (
    <div className="box">
      <Navbar />

      <div className="message-panel ">
        <h1>Messages ({messages.length})</h1>
        {loading ? (
          <p>Loading messages...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <ul>
            {messages.map((message) => (
              <li key={message._id}>
                <h4>{message.name}</h4>
                <p>
                  <strong>Email:</strong> {message.email}
                </p>
                <p>
                  <strong>Subject:</strong> {message.subject}
                </p>
                <p>{message.message}</p>
                <button onClick={() => handleDelete(message._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Msg_pannel;
