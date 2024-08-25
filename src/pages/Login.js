import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";

import { firebaseAuth, useFirebase } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
<<<<<<< Updated upstream
=======
  signOut,
>>>>>>> Stashed changes
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gImg from "../assets/g-img.png";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;

  .form {
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    width: 20rem /* 384px */;
    row-gap: 1rem;
    h4 {
      text-align: center;
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 700;
    }
  }
  .submit-btn {
    display: inline-flex;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    border-radius: 10px;
    background-color: rgba(5, 2, 3, 0.25);
    &:hover {
      transition: all 0.3s ease;
      background-color: rgba(10, 1, 10, 0.5);
    }
    &:disabled {
      background-color: #fff;
    }
  }
  .reg-link {
    margin-left: 0.5rem;
    cursor: pointer;
    text-decoration-line: underline;
  }
  .google-btn {
    margin-top: -2rem !important;
    margin: 0.5rem auto;
    cursor: pointer;
    width: 184px;
    height: 42px;
    background-color: $google-blue;
    border-radius: 12px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);

    .google-icon-wrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: $white;
    }
    .google-icon {
      display: flex;
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text {
      float: right;
      margin: 11px 11px 0 0;
      color: $white;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: "Roboto";
    }
  }
  .input {
    border-radius: 8px;
    flex-shrink: 1;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        setSubmitBtnDisabled(false);

        toast.success(
          "Logged in successfully, you will be redirected to homepage"
        );

        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        setSubmitBtnDisabled(false);
        const errorCode = error.code;
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.warning("Please fill all required fields");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("Email not found");
        }
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          toast.warning("Wrong Password");
        }
      });
  };

  const handleGoogleSignIn = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <h4>LogIn</h4>
        <ToastContainer position="top-center" />

<<<<<<< Updated upstream
        {/* google signIn button */}
=======
        {/* google sign-in */}
>>>>>>> Stashed changes
        <div className="google-btn" onClick={handleGoogleSignIn}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src={gImg} />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <strong style={{ textAlign: "center" }}>Or</strong>

        <label>Email</label>
        <input
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <button
          disabled={submitBtnDisabled}
          className="submit-btn"
          onClick={handleSubmit}
        >
          Login
        </button>

        <b>{errorMsg}</b>

        <p style={{ textAlign: "center" }}>
          Not a member?
          <Link to="/register" className="reg-link">
            register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
