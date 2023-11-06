import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import Sdata from "./Sdata";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Hero = () => {
  const [people, setPeople] = useState(Sdata);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <Wrapper>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, cover, name, title, quote } = person;
          return (
            <article
              className="slide"
              style={{
                transform: `translateX(${
                  100 * (personIndex - currentPerson)
                }%)`,
                opacity: personIndex === currentPerson ? 1 : 0,
                visibility:
                  personIndex === currentPerson ? "visible" : "hidden",
              }}
              key={id}
            >
              <img className="banner-img" src={cover} alt="" />
              {/* <h5 className="name">{name}</h5> */}
              {/* <p className="title">{title}</p> */}
              {/* <p className="text">{quote}</p> */}
            </article>
          );
        })}
        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .slider-container {
    margin: 0 auto;
    width: 100vw;
    max-width: 100%;
    position: relative;
    height: 450px;
    overflow: hidden;
  }

  .slide {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }

  .person-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    object-fit: cover;
    padding: 0 1rem;
  }
  .banner-img {
    /* height: 80vh;
    width: 90vw;
    object-fit: cover; */
    max-width: 100%;
    height: 2000px;
    width: 4000px;
    width: 100%;
    object-fit: contain;
    height: auto !important;
  }

  .name {
    text-transform: uppercase;
    color: var(--primary-500);
    margin-bottom: 0.75rem;
    padding: 0 1rem;
  }
  .title {
    text-transform: capitalize;
    color: var(--grey-500);
  }
  .text {
    max-width: 10em;
    padding: 0 1rem;
    margin: 0 auto;
    line-height: 2;
    margin-top: 2rem;
  }
  .next,
  .prev {
    position: absolute;
    display: grid;
    place-items: center;
    top: 220px;
    width: 1.25rem;
    height: 1.25rem;
    color: #d2c9ca;
    background: #3c3636;
    cursor: pointer;
    transition: var(--transition);
    border: none;
  }
  .prev:hover,
  .next:hover {
    background: #9361e0;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  @media screen and (min-width: 800px) {
    .text {
      max-width: 15rem;
    }
    /* .next,
    .prev {
      top: 100px;
    } */

    .next,
    .prev {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1100px) {
    .next,
    .prev {
      top: 100px;
    }
  }
  @media screen and (max-width: 390px) {
    .next,
    .prev {
      top: 100px;
    }
  }

  @media (max-width: 767px) {
    .banner-img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  @media screen and (max-width: 540px) {
    .next,
    .prev {
      top: 70px;
    }
  }

  @media (min-width: 768px) {
    .banner-img {
      max-width: 840px;
      max-height: 440px;
    }
  }

  @media (min-width: 992px) {
    .banner-img {
      max-width: 1114px;
      max-height: 514px;
    }
  }

  @media (min-width: 1200px) {
    .banner-img {
      max-width: 1580px;
      max-height: 480px;
      object-fit: cover;
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
