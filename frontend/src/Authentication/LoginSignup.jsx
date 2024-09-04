import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.response.data);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.response.data);
    }
  };

  return (
    <div
      className={`login-signup-container ${
        isRightPanelActive ? "login-signup-right-panel-active" : ""
      }`}
    >
      <div className="login-signup-form-container login-signup-sign-up-container">
        <form className="login-signup-form" onSubmit={handleSignUp}>
          <h1 className="login-signup-h1">Welcome to Bonvoyage</h1>
          <input
            className="login-signup-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="login-signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-signup-form-container login-signup-sign-in-container">
        <form className="login-signup-form" onSubmit={handleLogin}>
          <h1 className="login-signup-h1">Welcome to Bonvoyage</h1>
          <input
            className="login-signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="login-signup-a" to="/forgot-password">
            Forgot your password?
          </Link>
          <button className="login-signup-button" type="submit">
            Log In
          </button>
        </form>
      </div>
      <div className="login-signup-overlay-container">
        <div className="login-signup-overlay">
          <div className="login-signup-overlay-panel login-signup-overlay-left">
            <p className="login-signup-p">Already have an account?</p>
            <button
              className="login-signup-button ghost"
              onClick={handleSignInClick}
            >
              Login
            </button>
          </div>
          <div className="login-signup-overlay-panel login-signup-overlay-right">
            <p className="login-signup-p">Don't have an account?</p>
            <button
              className="login-signup-button ghost"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;