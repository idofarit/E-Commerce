import React from "react";
import { BsFacebook, BsInstagram, BsTwitch } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="section">
          <div className="links">
            <div className="link-div">
              <h4>For business</h4>

              <Link to="/">
                <p>employee</p>
              </Link>
              <Link to="/">
                <p>employee</p>
              </Link>
            </div>
            <div className="link-div">
              <h4>resources</h4>
              <Link to="/">
                <p>resource counter</p>
              </Link>
              <Link to="/">
                <p>testimonials</p>
              </Link>
              <Link to="/">
                <p>ETC</p>
              </Link>
            </div>
            <div className="link-div">
              <h4>partners</h4>
              <Link to="/">
                <p>swing tech</p>
              </Link>
            </div>
            <div className="link-div">
              <h4>company</h4>
              <Link to="/about">
                <p>about</p>
              </Link>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/products">
                <p>products</p>
              </Link>
            </div>
            <div className="link-div">
              <h4>Connect Us</h4>
              <div className="socialmedia">
                <Link to="https://www.facebook.com/">
                  <BsFacebook className="img" />
                </Link>

                <Link to="https://www.instagram.com/">
                  <BsInstagram className="img" />
                </Link>
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="footer-below">
            <div className="footer-copyright">
              <p>@{new Date().getFullYear()} ShopKart. All Rights Reserved.</p>
            </div>
            <div className="footer-below-links">
              <Link href="/terms">
                <div>
                  <p>Terms & conditions</p>
                </div>
              </Link>
              <Link to="/privacy">
                <div>
                  <p>privacy</p>
                </div>
              </Link>
              <Link to="/cookie">
                <div>
                  <p>Cookie declaration</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
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
  .section {
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
  }
  .link-div {
    width: 150px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: blueviolet;
    font-size: 14px;
    line-height: 17px;
    margin: 1rem 0.5rem;
    cursor: pointer;
    @media screen and (max-width: 460px) {
      text-align: center;
    }
  }
  a {
    color: rgb(185, 175, 129);
  }
  .socialmedia {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .img {
      width: 2rem;
      height: 1.2rem;
    }
  }
  .footer-below {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.2rem;
  }
  .footer-below-link {
    display: flex;
    flex-direction: row;
  }
  .footer-below-link p {
    font-size: 15px;
    line-height: 15px;
    margin-left: 2rem;
    color: blue;
    font-weight: 600;
  }
  hr {
    color: blueviolet !important;
    width: 100%;
  }
  .footer-copyright p {
    font-size: 15px;
    line-height: 25px;
    color: rgb(115, 125, 200);
    font-weight: 600;
  }
`;

export default Footer;
