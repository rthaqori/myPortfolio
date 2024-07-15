import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 130px;
  height: 50px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5vh;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    font-weight: 700;
  }

  & a {
    text-decoration: none;
    color: #000000;
  }

  &:hover a {
    color: #ffffff;
  }
`;

const Button = (props) => {
  return (
    <StyledButton onClick={props.handleClick}>{props.children}</StyledButton>
  );
};

export default Button;
