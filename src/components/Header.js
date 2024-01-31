import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth, useFirebase } from "../Firebase/Firebase";

import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "../context/cart_context";

const Wrapper = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: var(--clr-grey-9);
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
  button {
    padding: 2px 8px;
    height: 1.5rem;
    margin: 0 10px;
    font-size: 0.7rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    box-shadow: 7px 4px 7px 2px rgba(0, 0, 0, 0.18);
  }
`;

const Header = () => {
  const { clearCart } = useCartContext();
  const { user } = useFirebase();
  const navigate = useNavigate();

  const handleLogout = () => {
    firebaseAuth.signOut().then(() => {
      toast.success("Logged Out");
      navigate("/login");
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <ToastContainer position="top-right" />
        {user ? (
          <div className="item">
            <p style={{ margin: "auto" }}>Welcome {user?.displayName}</p>
            <button
              onClick={() => {
                clearCart();
                handleLogout();
              }}
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
      </div>
    </Wrapper>
  );
};

export default Header;
