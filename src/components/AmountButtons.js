import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaUps } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className="amount-btn">
      <button className="amount-btn" onClick={increase}>
        <MdKeyboardArrowUp />
      </button>
      <h4 className="amount">{amount}</h4>
      <button className="amount-btn" onClick={decrease}>
        <MdKeyboardArrowDown />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    /* padding: 0.5rem 0; */
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    font-size: xx-large;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
