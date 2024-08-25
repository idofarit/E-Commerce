import React from "react";
import styled from "styled-components";
import infant from "../assets/infant.JPG";
import kids from "../assets/kids.jpg";
import women from "../assets/women.JPG";
import bangle from "../assets/bangle.JPG";
import men from "../assets/men.jpg";
import jwellery from "../assets/jwellery.JPG";

import { Link } from "react-router-dom";
import Contact from "./Contact";

const Warpper = styled.div`
  position: relative;
  background: linear-gradient(
      38.73deg,
      rgba(7, 62, 87, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(44, 215, 234, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  .categories {
    display: flex;
    height: 100vh;
    gap: 10px;
    margin: 10px;
    margin-top: 1.5rem !important;

    .col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .col-1 {
      flex: 2;
    }
    .row {
      flex: 1;
      display: flex;
      gap: 10px;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      button {
        position: absolute;
        border-radius: 5px;
        font-size: 1rem;
        letter-spacing: 2px;
        width: fit-content;
        height: 40px;
        padding: 10px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        cursor: pointer;
        border: none;
        background-color: #fff;
        text-transform: capitalize;
        font-weight: 500;
        @media (max-width: 765px) {
          font-size: 0.6rem;
          letter-spacing: 1px;
          padding: 0 5px;
          height: 28px;
        }
      }
    }
    @media screen and (max-width: 765px) {
      height: 50vh;
      gap: 2px;
      margin: 2px;

      .col {
        gap: 2px;
      }
      .row {
        gap: 2px;
      }
      .col.col-1 {
        gap: 2px;
      }
    }
  }
`;

const Category = () => {
  return (
    <Warpper className="section">
      <div className="title">
        <h2>Our categories</h2>
        <div className="underline"></div>
      </div>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img src={infant} alt="" />
            <div className="overlay"></div>
            <button>
              <Link to="/products" className="link">
                Infant
              </Link>
            </button>
          </div>
          <div className="row">
            <img src={kids} alt="" />
            <div className="overlay"></div>
            <button>
              <Link to="/products" className="link">
                Kids
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src={men} alt="" />
            <div className="overlay"></div>
            <button>
              <Link to="/products" className="link">
                Men
              </Link>
            </button>
          </div>
        </div>

        <div className="col col-1">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src={jwellery} alt="" />
                <div className="overlay"></div>
                <button>
                  <Link to="/products" className="link">
                    Jwellery
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src={bangle} alt="" />
                <div className="overlay"></div>
                <button>
                  <Link to="/products" className="link">
                    Bangles
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src={women} alt="" />
            <div className="overlay"></div>
            <button>
              <Link to="/products" className="link">
                Women
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <Subscription /> */}
      <Contact />
    </Warpper>
  );
};

export default Category;
