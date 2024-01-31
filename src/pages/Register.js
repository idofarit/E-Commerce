import React, { useState } from "react";
import styled from "styled-components";
import { Form, Link, useNavigate } from "react-router-dom";
import { fireStore, firebaseAuth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 24rem;
    padding: 2rem;
    row-gap: 2rem;
  }
  .login-link {
    margin-left: 0.5rem;
    cursor: pointer;
    text-decoration-line: underline;
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

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);
        await updateProfile(user, {
          displayName: username,
        });
        await setDoc(doc(fireStore, "users", user.uid), {
          username: username,
          email: email,
          phonenumber: phonenumber,
          password: password,
          cart: initialcartvalue,
          address: address,
          uid: user.uid,
        })
          .then(async () => {
            toast.success(
              "New user added successfully, You will now be automatically redirected to login page."
            );

            setUsername("");
            setPhonenumber("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.error("Please fill all required fields");
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.warning("User already exists");
        }
      });
  };

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSignup}>
        <h3
          style={{
            textAlign: "center",

            lineHeight: "2rem",
          }}
        >
          register
        </h3>
        <ToastContainer position="top-center" />

        <label>Your name</label>
        <input
          className="input"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="First and last name"
        />
        <label>Mobile Number</label>
        <input
          className="input"
          onChange={(e) => setPhonenumber(e.target.value)}
          type="tel"
          placeholder="Mobile Number"
        />
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
        <label>Address</label>
        <textarea
          style={{ padding: "1rem", height: "50px" }}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        ></textarea>
        <button className="submit-btn" type="submit">
          Sign up
        </button>

        <p style={{ textAlign: "center" }}>
          already a member?
          <Link to="/login" className="login-link">
            LogIn
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
