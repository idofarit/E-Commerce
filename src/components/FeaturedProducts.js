import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    featured_products: featured,
    products_error: error,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <button className="product-btn">
        <Link className="link-btn" to={"products"}>
          All Products
        </Link>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .product-btn {
    /* display: block;
    width: 158px;
    margin: 0 auto;
    text-align: center;
    color: white; */

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
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
