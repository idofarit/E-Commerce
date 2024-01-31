import React, { useState } from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Subscription from "./Subscription";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Wrapper>
      <div className="contact">
        <div className="wrapper">
          <span>CONNECT WITH US:</span>
          <div className="mail">
            <button onClick={() => setShowPopup(!showPopup)}>
              Subscribe to Our <strong>NewsLetter</strong>
            </button>
          </div>
          {createPortal(
            showPopup && (
              <Subscription showPopup={showPopup} setShowPopup={setShowPopup} />
            ),
            document.body
          )}
          <div className="icons">
            <Link className="icons-link" to="https://www.facebook.com/">
              <BsFacebook />
            </Link>
            <Link className="icons-link" to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
            <Link className="icons-link" to="https://twitter.com/">
              <BsTwitter />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;

  .contact {
    background-color: #2879fe;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: center;

    .wrapper {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1050px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 10rem;
        font-size: 12px;
        text-align: center;
        justify-content: center;
      }

      input {
        padding: 10px;
        border: none;
        border-radius: 5px 0 0 5px;
        margin: 8px 0;
      }

      button {
        margin-top: 8px;
        padding: 10px;
        color: white;
        background: #333;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 0.5s;
        :hover {
          background-color: var(--clr-primary-9);
          color: var(--clr-red-light);
        }
      }

      .icons {
        display: flex;
        gap: 10px;
        margin-top: 8px;
      }
    }
  }
`;
export default Contact;
