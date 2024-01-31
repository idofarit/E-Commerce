import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const ProductImages = ({ images = [{ url: " " }] }) => {
  const [main, setMain] = useState(images[0]);
  const { single_product_loading: loading } = useProductsContext();

  useEffect(() => {
    if (images[0].url !== "") {
      setMain(images[0]);
    }
  }, [images[0].url]);
  return (
    <Wrapper>
      <img src={main.url} alt="main img" className="main" />
      <div className="gallery">
        {images.map((image, id) => {
          return (
            <img
              src={image.url}
              key={id}
              alt={image.filename}
              onClick={() => setMain(images[id])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
