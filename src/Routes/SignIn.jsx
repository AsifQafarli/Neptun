import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.email && formData.password.length >= 6) {
      setError("");
      setSuccess("Account successfully created! Please log in now.");
      setFormData({ username: "", email: "", password: "" });
    } else {
      setSuccess("");
      setError("Please ensure all information is entered correctly. The password must be at least 6 characters long.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h1>Create an Account</h1>
        <p>Start your journey with us</p>
        {error && <p className="signin-error">{error}</p>}
        {success && <p className="signin-success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="signin-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="signin-input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="signin-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="signin-btn">
            Sign Up
          </button>
          <div className="signin-links">
            <a href="#">Already have an account? Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
