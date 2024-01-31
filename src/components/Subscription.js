import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";
import Lottie from "lottie-react";
import animationData from "../assets/ani.json";

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ease-in 0.3s;
  border-radius: 10px;
  backdrop-filter: blur(10px);

  .successBox {
    display: flex;
    width: 10.5rem;

    .animation {
      height: 3rem;
      width: 3rem;
      position: absolute;
      top: 2.5rem;
      left: 10rem;
    }
    p {
      font-size: 1rem;
      top: 3.2rem;
    }
  }
  .defaultBox {
    height: 10.5rem;
  }

  &.show {
    display: flex;
    opacity: 1;
    background-color: rgba(230, 200, 190, 0.5);
    /* height: 17.5rem; */
    width: 15rem;
    padding: 4rem 2rem;
  }
  .close {
    color: var(--clr-primary-1);
    position: absolute;
    left: 13rem;
    top: 1.2rem;
    background: transparent;
    border: none;
    font-size: larger;
    cursor: pointer;
  }
  p {
    position: absolute;
    width: 10.5rem;
    font-size: 0.8rem;
    padding-bottom: 2rem;
    top: 2.5rem;
    color: var(--clr-primary-3);
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 12px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

const Subscription = ({ showPopup, setShowPopup }) => {
  const form = useRef();
  const [showForm, setShowform] = useState(true);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_04jw2t3",
        "template_r8erhhk",
        form.current,
        "_ZHizmkC7RQd31wK1"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            setSuccess(true);
            setTimeout(() => {
              setShowform(false);
            }, 2000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    showForm && (
      <StyledContactForm className={showPopup ? "show" : ""}>
        {!success && <p>Subscribe to our NewsLetter</p>}
        <button className="close" onClick={() => setShowPopup(!showPopup)}>
          <IoMdClose />
        </button>

        {success ? (
          <div className="successBox">
            <p>Sent Successfully </p>{" "}
            <Lottie className="animation" animationData={animationData} />
          </div>
        ) : (
          <div className="defaultBox">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="from_email" />

              <input type="submit" value="Subscribe" />
            </form>
          </div>
        )}
      </StyledContactForm>
    )
  );
};

export default Subscription;
