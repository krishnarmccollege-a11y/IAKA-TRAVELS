import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IakaTravelAuth.css";

import iakaLogo from "./assets/iaka-logo.png";

function IakaTravelAuth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter your email and password.");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        {/* IAKA TRAVEL LOGO */}
        <div className="auth-logo-container">
          <img
            src={iakaLogo}
            alt="IAKA Travel"
            className="auth-logo"
          />
        </div>

        {/* BRAND */}
        <h1>IAKA Travels</h1>

        <p className="auth-tagline">
          Emotion is to Travel ✈️
        </p>

        {/* LOGIN */}
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="login-button"
          onClick={handleLogin}
        >
          Login to IAKA Travels
        </button>

        <p className="auth-footer-text">
          Explore • Experience • Remember
        </p>

      </div>

    </div>
  );
}

export default IakaTravelAuth;