import { useState } from "react";
import styles from "./login.module.css";
import { fetchPost } from "../utils/fetchUtils";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchPost("readers/login", {
      username: inputs.username,
      password: inputs.password,
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.message);
    } else {
      localStorage.setItem("token", data.output.token);
      setError("");
    }
  };

  return (
    <div className={`container ${styles.loginContainer}`}>
      <h1 className="page-title">Login</h1>
      <div className={styles.loginFormContainer}>
        {error && <div className={styles.errorContainer}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
          <p>
            Or <a href="/signup">sign up</a> for a new one
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
