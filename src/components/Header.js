import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth, useFirebase } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";

const Wrapper = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #d3f2eb;
  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 640px) {
      justify-content: flex-end;
    }
  }
  .item {
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    align-items: center;
  }
  .linkBtn {
    cursor: pointer;
    text-decoration-line: underline;
    font-size: 0.75rem;
    line-height: 1rem;
    @media (min-width: 640px) {
      font-size: 0.875rem /* 14px */;
      line-height: 1.25rem /* 20px */;
    }
  }
`;

const Header = () => {
  // useEffect(() => {
  //   firebaseAuth.onAuthStateChanged((user) => {
  //     console.log(user);
  //   });
  // }, []);
  const { isLoggedIn, user } = useFirebase();
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const handleLogout = () => {
    firebaseAuth.signOut().then(() => {
      toast.success("Logged Out");
      navigate("/login");
    });
  };

  return (
    <Wrapper>
      <div className="container">
        {/* <div className="item"> */}
        <ToastContainer position="top-right" />
        {user ? (
          <div className="item">
            <p style={{ margin: "auto" }}>welcome {user?.displayName}</p>
            <button
              style={{
                padding: "2px 8px",
                fontSize: "12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              {" "}
              LogOut{" "}
            </button>
          </div>
        ) : (
          <div className="item">
            <Link to="/login" className="linkBtn">
              {" "}
              SignIn
            </Link>
            <Link to="/register" className="linkBtn">
              Create Account
            </Link>
          </div>
        )}

        {/* <Link to="/login" className="linkBtn"> */}
        {/* SignIn */}
        {/* {(user && `welcome ${user.displayName}`) || "signin"} */}
        {/* </Link> */}

        {/* <Link to="/register" className="linkBtn">
            Create Account
            {(user && <button>logout</button>) || "Create account"}
          </Link> */}
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default Header;
