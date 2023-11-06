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
      {/* <label htmlFor={name} className="label"> */}
      {props.label && <label>{props.label}</label>}
      {/* <span
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textTransform: "capitalize",
          }}
        >
          {label}
        </span> */}
      {/* </label> */}
      {/* <input
        type={type}
        name={name}
        style={{
          flexShrink: "1",
          height: "3rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "1rem",
          lineHeight: "1rem",
        }}
        value={value}
      /> */}
      <input type="text" {...props} />
    </Wrapper>
  );
};

export default FormInput;
