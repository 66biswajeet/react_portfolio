import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://biswajeetbackend.onrender.com/api/auth/admin",
        {
          name,
          password,
        }
      );
      setName("");

      if (response.data.redirectUrl) {
        navigate(response.data.redirectUrl);
      }
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred");
    }
  };

  return (
    <div className="main_box">
      <div className="form-container">
        <p className="titlep">Login As Admin</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Admin Key</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="sign" type="submit">
            Admin inside
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
