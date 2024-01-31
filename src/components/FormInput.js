import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    display: flex;
    user-select: none;
  }
  input {
    border-radius: 8px;
    flex-shrink: 1;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const FormInput = (props) => {
  return (
    <Wrapper>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </Wrapper>
  );
};

export default FormInput;
