import React, { useContext, useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import FormInput from "../components/FormInput";
import { firebaseAuth, useFirebase } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth_context";

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
    row-gap: 2rem;
    h4 {
      text-align: center;
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
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
    border-radius: 2px;
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
  const firebase = useFirebase();
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [errorMsg, setErrorMsg] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  // submit function
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!values.email || !values.password) {
  //     setErrorMsg("fill all fields");

  //     return;
  //   }
  //   setErrorMsg("");

  //   setSubmitBtnDisabled(true);
  //   signInWithEmailAndPassword(firebaseAuth, values.email, values.password)
  //     .then(async (response) => {
  //       setSubmitBtnDisabled(false);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       setSubmitBtnDisabled(false);
  //     });
  // };

  // new try

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

        // console.log(loggeduser.email)
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
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          toast.warning("Please fill all required fields");
        }
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          toast.error("Email not found");
        }
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          toast.warning("Wrong Password");
        }
      });
  };

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <h4>LogIn</h4>
        <ToastContainer position="top-center" />

        {/* <FormInput
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          type="email"
          label="email"
          name="identifier"
        />
        <FormInput
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          label="password"
          name="password"
        />
        <div style={{ marginTop: "1rem" }}>
          <button
            disabled={submitBtnDisabled}
            type="submit"
            className="submit-btn"
            // onClick={handleSubmit}
          >
            submit
          </button>
        </div> */}

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
        {/* google signIn button */}
        <div className="google-btn" onClick={firebase.signInWithGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
