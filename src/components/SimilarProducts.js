import React from "react";
import SimilarSingleProduct from "../pages/SimilarSingleProduct";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SimilarProducts = () => {
  const { products } = useProductsContext();
  return (
    <>
      <Wrapper className="section">
        <div className="title">
          <h2>Similar products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {products.slice(0, 7).map((product) => {
            return <SimilarSingleProduct key={product.id} {...product} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 98%, 0 100%);
  .featured {
    margin: 4rem auto;
    display: flex;
    overflow-x: auto;

    gap: 1.5rem;
    img {
      height: 100px;
      width: 100%;
      white-space: nowrap;
    }
  }
  .product-btn {
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    background: rgba(276, 71, 71, 0.9);

    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: block;
    font-weight: 400;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border-color: transparent;
  }
  .product-btn:hover {
    background: lightblue;
  }
  .link-btn {
    color: #fff;
  }
  .title {
    h2 {
      display: flex;
      margin: 0 12rem;
      font-size: 35px;
    }
    .underline {
      display: flex;
      margin: 0 12rem;
      margin-top: 0.5rem;
    }
    @media screen and (max-width: 752px) {
      h2 {
        margin: auto;
        justify-content: center;
        font-size: 20px;
      }
      .underline {
        margin: auto;
        justify-content: center;
        margin-top: 0.3rem;
      }
    }
  }
  .section {
    padding: 2rem 0;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default SimilarProducts;
