import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"; // Import CSS module for styling

const Reset = () => {
  // State variables
  const [data, setData] = useState({ email: "", password: "", newPassword: "" });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/reset"; // Backend API endpoint URL
      const { data: res } = await axios.post(url, data); // Send POST request with form data
      localStorage.setItem("token", res.data); // Store token in localStorage
      window.location = "/login"; // Redirect to login page after successful reset
      alert("Password changed successfully!"); // Display success message
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message); // Set error message from server response
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Reset Your Password</h1>
            {/* Email input field */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            {/* Current password input field */}
            <input
              type="password"
              placeholder="Current Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {/* New password input field */}
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              onChange={handleChange}
              value={data.newPassword}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Change Password
            </button>
          </form>
        </div>
        <div className={styles.right}>
          {/* Link to signup page */}
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
          {/* Link to login page */}
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reset;
