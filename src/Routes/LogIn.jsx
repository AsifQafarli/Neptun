import React, { useState } from "react";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

  // İstifadəçi məlumatlarını saxlamaq üçün state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");
  // Form göndərmə funksiyası
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sadə doğrulama
    if (email === "asifqafarli@gmail.com" && password === "12345") {
      alert("Successfully Logged In!");
      setError("");    // Sehvleri temizle
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Please log in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Email dəyişir
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Şifrə dəyişir
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Xəta mesajı */}
          <button type="submit" className="btn">
            Log In
          </button>
          <div className="links">
            <a href="#">Forgot Password?</a>
            <span> | </span>
            <a href="#">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
