import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"; // Import CSS module for styling

const Login = () => {
  // State variables for form data and error message
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input change in login form
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const url = "http://localhost:8080/api/auth"; // Backend API endpoint URL for login
      const { data: res } = await axios.post(url, data); // Send POST request with form data
      localStorage.setItem("token", res.data); // Store token in localStorage
      window.location = "/"; // Redirect to home page after successful login
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message); // Set error message from API response
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
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
            {/* Password input field */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {/* Display error message if exists */}
            {error && <div className={styles.error_msg}>{error}</div>}
            {/* Login button */}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          {/* Navigation links */}
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
          <Link to="/reset">
            <button type="button" className={styles.white_btn}>
              Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
