import React, { useState } from "react";

import "./authPage.scss";
import Button from "../../UI/Button/Button";

import googleImg from "../../assets/images/google.png";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout/PageLayout";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isLogIn, setIsLogIn] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputsHandler = (name, value) => {
    setInputs((currInputs) => ({ ...currInputs, [name]: value }));
  };

  const handleAuth = () => {
    if (isLogIn && (inputs.email === "" || inputs.password === "")) {
      alert("Please enter all the fields");
      return;
    }

    if (
      !isLogIn &&
      (inputs.email === "" ||
        inputs.password === "" ||
        inputs.confirmPassword === "")
    ) {
      alert("Please enter all the fields");
      return;
    }

    console.log("Success!: ", inputs);

    navigate('/');
  };
  return (
    <div className="auth-page">
      <div className="auth-container-box">
        <h2>socializeME</h2>
        {/* {!isLogIn && (
          <input type="text" name="username" id="" placeholder="Username" />
        )} */}
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={(e) => inputsHandler(e.target.name, e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={(e) => inputsHandler(e.target.name, e.target.value)}
        />
        {!isLogIn && (
          <input
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
            onChange={(e) => inputsHandler(e.target.name, e.target.value)}
          />
        )}

        <Button
          style={{
            width: "100%",
          }}
          onClick={handleAuth}
        >
          {isLogIn ? "Log in" : "Sign up"}
        </Button>

        <div className="or-container">
          <span className="line"></span>
          <p>OR</p>
          <span className="line"></span>
        </div>

        <div className="google-login">
          <img src={googleImg} alt="googlepng-img" />
          <p className="redirect-link">
            {isLogIn ? "Log" : "Sign"} in with Google
          </p>
        </div>
      </div>
      <div className="auth-container-box">
        <div className="redirect-route">
          <p>
            {isLogIn ? "Don't have an account?" : "Already have an account?"}
          </p>
          <p onClick={() => setIsLogIn(!isLogIn)} className="redirect-link">
            {isLogIn ? "Sign up" : "Log in"}
          </p>
        </div>
      </div>

      <p>
        Created by{" "}
        <a
          href="https://rauchrodrigues.vercel.app/"
          target="_blank"
          className="redirect-link"
        >
          Rauch Rodrigues
        </a>
      </p>
    </div>
  );
};

export default AuthPage;
