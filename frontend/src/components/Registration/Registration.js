import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

function Registration({ onToggleView }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorField, setErrorField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorField("");
    setErrorMessage("");

    if (!validateEmail(email)) {
      setErrorField("email");
      setErrorMessage("Enter valid email");
      return;
    }

    if (!validatePassword(password)) {
      setErrorField("password");
      setErrorMessage(
        "(At least 8 characters, 1 lowercase (a-z), 1 number (0-9))"
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorField("confirmPassword");
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { fullName, email, collegeName, role, password },
        { withCredentials: true }
      );
      console.log("Registration successful:", res.data);
      alert("Registration successful");
      onToggleView();
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      alert("Registration failed");
    }
  };



  return (
    <div className="registration-page">
      <div className="registration-card">
        <div className="registration-header">
          <img
    src="/images/createacc.png"
    alt="Create Account Logo"
    className="registration-page-logo"
  />
          <h2 className="registration-title">Create Account</h2>
          <p className="registration-subtitle">Join CampusEventHub today</p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="registration-input"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              className={`registration-input ${
                errorField === "email" ? "input-error" : ""
              }`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorField === "email" && (
              <p className="error-text">{errorMessage}</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              className="registration-input"
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <select
              className="registration-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Administrator</option>
              <option value="organizer">Event Organizer</option>
            </select>
          </div>

          <div className="input-group">
            <input
              type="password"
              className={`registration-input ${
                errorField === "password" ? "input-error" : ""
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorField === "password" && (
              <p className="error-text">{errorMessage}</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              className={`registration-input ${
                errorField === "confirmPassword" ? "input-error" : ""
              }`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errorField === "confirmPassword" && (
              <p className="error-text">{errorMessage}</p>
            )}
          </div>

          <button type="submit" className="registration-button">
            Sign Up
          </button>

          <p className="login-link-text">
            Already have an account?{" "}
            <a href="#!" className="login-link" onClick={onToggleView}>
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
