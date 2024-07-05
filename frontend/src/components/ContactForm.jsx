import React, { useState } from "react";
import "../css/ContactForm.css"; // Import your CSS file
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Optional loading state
  const [error, setError] = useState(null); // Optional error state
  const [success, setSuccess] = useState(false); // Optional success state

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Start loading indicator (optional)
    setError(null); // Clear any previous errors
    setSuccess(false); // Clear any previous success message

    try {
      const newContact = { name, email, subject, message };
      const response = await axios.post(
        "http://localhost:5000/api/auth/contact",
        newContact
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSuccess(true);
    } catch (error) {
      console.error("There was an error creating the post!", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-card2">
      <form onSubmit={handleSubmit}>
        <p className="form-heading">Get In Touch</p>

        {/* Name Field */}
        <div className="form-field">
          <input
            required
            placeholder="Name"
            className="input-field"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="form-field">
          <input
            required
            placeholder="Email"
            className="input-field"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Subject Field */}
        <div className="form-field">
          <input
            required
            placeholder="Subject"
            className="input-field"
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Message Field */}
        <div className="form-field">
          <textarea
            required
            placeholder="Message"
            cols="30"
            rows="3"
            className="input-field"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="sendMessage-btn" type="submit">
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {/* Optional Loading Indicator */}
        {isLoading && <div className="loading-indicator">Sending...</div>}

        {/* Optional Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Optional Success Message */}
        {success && <div className="success-message">Message Sent!</div>}
      </form>
    </div>
  );
};

export default ContactForm;
