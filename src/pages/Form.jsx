import { formToJSON } from "axios";
import React from "react";
import { Link } from "react-router-dom";

const From = () => {
  return (
    <div className="main-form">
      <h3>If you have acount please login</h3>
      <Link to="/login" className="form-link">
        Login
      </Link>

      <h3>Or sign up</h3>
      <Link to="/signup" className="form-link">
        Sign Up
      </Link>
    </div>
  );
};

export default From;
