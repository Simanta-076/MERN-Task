import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const DeleteAccount = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/delete"; // Adjust URL according to your backend endpoint
      const response = await axios.delete(url, {
        data: formData,
        headers: {
          "Content-Type": "application/json",
          // Optionally add authorization headers if required
        },
      });
      setSuccessMessage(response.data.message);
      // Optionally perform additional actions after successful deletion
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleDeleteSubmit}>
            <h1>Delete Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            {successMessage && (
              <div className={styles.success_msg}>{successMessage}</div>
            )}
            <button type="submit" className={styles.green_btn}>
              Delete Account
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Back to Login
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
