import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IakaTravelAuth.css";

function IakaTravelAuth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter Email and Password");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          🌍
        </div>

        <h1>AKA Travels</h1>

        <p>Emotion is to Travel ✈️</p>

        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>

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

          <button type="submit">
            Login to AKA Travels
          </button>

        </form>

        <p className="login-note">
          Explore • Experience • Remember
        </p>

      </div>

    </div>
  );
}

export default IakaTravelAuth;