import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "https://digital-website.onrender.com";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      setError(true);
      setErrorMessage("Please fill in all fields");
      return;
    }

    console.log({ name, email, password, confirmPassword });

    setLoading(true);
    try {
      await axios.post(`${url}/user/register`, {
        name: name,
        email: email,
        password: password,
      });

      setLoading(false);
      setError(false);
      //   redirect to login page
      window.location = "/login";
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
      setErrorMessage(error.response.data.message);
    }

    // Move the return statement outside of the handleSubmit function
  };

  return (
    <div className="form">
      <div className={error ? "sign-from error" : "sign-from"}>
        <h1> Sign Up </h1>{" "}
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />{" "}
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />{" "}
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />{" "}
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />{" "}
        <button onClick={handleSubmit}>
          {" "}
          {loading ? "Loading ..." : "Sign Up"}{" "}
        </button>{" "}
        {error && <span className="error-text"> {errorMessage} </span>}{" "}
        <p>
          If you have an account, please <Link to="/login"> Login </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default SignUp;
