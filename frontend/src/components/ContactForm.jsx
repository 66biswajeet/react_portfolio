import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="form-card1">
      <div className="form-card2">
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-heading">Get In Touch</p>

          <div className="form-field">
            <input
              required
              placeholder="Name"
              className="input-field"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              required
              placeholder="Email"
              className="input-field"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              required
              placeholder="Subject"
              className="input-field"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <textarea
              required
              placeholder="Message"
              cols="30"
              rows="3"
              className="input-field"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="sendMessage-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
