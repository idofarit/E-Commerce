import React from "react";
import { BsFacebook, BsInstagram, BsTwitch } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="section">
          <div className="links">
            <div className="link-div">
              <h4>For business</h4>
              <a href="/employee">
                <p>employee</p>
              </a>
              <a href="/employee">
                <p>employee</p>
              </a>
              <a href="/employee">
                <p>employee</p>
              </a>
            </div>
            <div className="link-div">
              <h4>resources</h4>
              <a href="/resource">
                <p>resource counter</p>
              </a>
              <a href="/employee">
                <p>testimonials</p>
              </a>
              <a href="/employee">
                <p>ETC</p>
              </a>
            </div>
            <div className="link-div">
              <h4>partners</h4>
              <a href="/employee">
                <p>swing tech</p>
              </a>
            </div>
            <div className="link-div">
              <h4>company</h4>
              <a href="/about">
                <p>about</p>
              </a>
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/products">
                <p>products</p>
              </a>
            </div>
            <div className="link-div">
              <h4>Connect with Us</h4>
              <div className="socialmedia">
                <BsFacebook className="img" />
                <BsTwitch className="img" />
                <BsInstagram className="img" />
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="footer-below">
            <div className="footer-copyright">
              <p>@{new Date().getFullYear()} ShopKart. All Rights Reserved.</p>
            </div>
            <div className="footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terms & conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>privacy</p>
                </div>
              </a>
              <a href="/cookie">
                <div>
                  <p>Cookie declaration</p>
                </div>
              </a>
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

    .img {
      width: 80%;
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
