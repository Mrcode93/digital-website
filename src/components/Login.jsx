import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Loader from "../components/loader";

const url = "https://digital-website.onrender.com";

const Login = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credential || !password) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${url}/user/login`, {
        credential: credential,
        password: password,
      });
      console.log(res);
      // save token in cookies
      document.cookie = `token=${res.data.token}`;

      // save user infromation in session storage
      sessionStorage.setItem("user", JSON.stringify(res.data));
      setError(false);

      //   window.location.reload();
      setLoading(false);

      //   redirect to home
      window.location = "/";

      //   save the if user singed in or not
      sessionStorage.setItem("signedIn", true);
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="form ">
      <div className={error ? "login-from error" : "login-from"}>
        <h1> Login </h1>{" "}
        <input
          type="text"
          placeholder="email or username"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
        />{" "}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button onClick={handleSubmit}>
          {" "}
          {loading ? "Loading ..." : "Login"}{" "}
        </button>{" "}
        {error && (
          <span className="error-text"> Please fill all the fields! </span>
        )}
        <p>
          Dont have an account ? <Link to="/signup"> Sign Up </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
