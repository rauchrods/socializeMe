import { useState } from "react";

import "./authPage.scss";

import Login from "../../components/AuthForm/Login";
import SignUp from "../../components/AuthForm/SignUp";
import GoogleAuth from "../../components/AuthForm/GoogleAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  // const navigate = useNavigate();

  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container-box">
        <h2>socializeME</h2>

        {isLogIn ? <Login /> : <SignUp />}

        <div className="or-container">
          <span className="line"></span>
          <p>OR</p>
          <span className="line"></span>
        </div>

        <GoogleAuth isLogIn ={isLogIn}/>
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
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
