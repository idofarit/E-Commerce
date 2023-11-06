import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter, BsGoogle } from "react-icons/bs";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact">
        <div className="wrapper">
          <span>BE IN TOUCH WITH US:</span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>JOIN US</button>
          </div>
          <div className="icons">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsGoogle />
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
        border-radius: 0 5px 5px 0;
        border: none;
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
