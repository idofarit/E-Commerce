import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilter,
    clearFilter,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");
  // console.log(categories);
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()} className="container">
          {/* search input */}
          <div className="form-control item-1">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilter}
            />
            {/* categories */}

            <div className="form-control item-2">
              <h5>category</h5>
              <div>
                {categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      name="category"
                      type="button"
                      onClick={updateFilter}
                      className={`${c === category ? "active" : null}`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* companies */}

          <div className="form-control item-3">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilter}
              className="company"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* colors */}

          <div className="form-control item-4">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilter}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    onClick={updateFilter}
                    data-color={c}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* price range */}

          <div className="form-control item-5">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilter}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>

          {/* shipping */}

          <div className="form-control shipping item-6">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilter}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    opacity: 1;
    cursor: pointer;
  }
  .active {
    opacity: 1;
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    border-bottom-color: red;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    /* font-size: 1rem; */
    max-width: 100px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .item-1 {
    grid-area: search;
    input {
      width: 100%;
    }
  }
  .item-2 {
    margin-top: 1rem;
    grid-area: category;
    h5 {
      text-align: center;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
    }
  }
  .item-3 {
    grid-area: company;
  }
  .item-4 {
    grid-area: colors;
  }
  .item-5 {
    grid-area: price;
    /* margin: auto; */
  }
  .item-6 {
    grid-area: shipping;
  }

  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-areas:
        "category category  "
        "search search  "
        "company colors   "
        "price shipping  ";
      /* grid-gap: 10px; */
    }

    .clear-btn {
      width: 100%;
    }
  }
`;

export default Filters;
