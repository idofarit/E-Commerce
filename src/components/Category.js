import React from "react";
import styled from "styled-components";
import bedroom from "../assets/bedroom.jpg";
import kids from "../assets/kids.jpg";
import livingRoom from "../assets/livingRoom.jpg";
import officeChair from "../assets/officeChair.jpg";
import sofa from "../assets/sofa.jpg";
import yellowChair from "../assets/yellowChair.jpg";

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
        &:hover {
          transition: all 200ms ease-in-out;
          transform: scale(1.2);
        }
      }

      button {
        position: absolute;
        /* min-width: 100px; */
        width: fit-content;
        height: 50px;
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
      }
    }
  }
`;

const Category = () => {
  return (
    <Warpper className="section">
      <div className="categories">
        <div className="col">
          <div className="row">
            <img src={kids} alt="" />
            <button>
              <Link to="/products" className="link">
                Sale
              </Link>
            </button>
          </div>
          <div className="row">
            <img src={bedroom} alt="" />
            <button>
              <Link to="/products" className="link">
                bedRoom
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src={sofa} alt="" />
            <button>
              <Link to="/products" className="link">
                sofa
              </Link>
            </button>
          </div>
        </div>

        <div className="col col-1">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src={yellowChair} alt="" />
                <button>
                  <Link to="/products" className="link">
                    yellowChair
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src={officeChair} alt="" />
                <button>
                  <Link to="/products" className="link">
                    officeChair
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src={livingRoom} alt="" />
            <button>
              <Link to="/products" className="link">
                livingRoom
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </Warpper>
  );
};

export default Category;
