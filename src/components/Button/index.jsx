import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    background-color: black;
    position: absolute;
    top: -4px;
    bottom: -4px;
    width: 100%;
    left: 0;
  }

  &:before {
    content: '';
    background-color: black;
    position: absolute;
    left: -4px;
    right: -4px;
    height: 100%;
  }
`

const StyledButton = styled.button`
  background-color: #7318F4;
  color: white;
  display: grid;
  place-items: center;
  font-size: 2rem;
  position: relative;
  border: none;
  z-index: 1;
  border-bottom: 0.6rem solid #4C1F7C;
  border-right: 0.6rem solid #4C1F7C;
  width: 12rem;
  height: 4.4rem;
`

export const Button = (props) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={props.onClick}>
        {props.children}
      </StyledButton>
    </ButtonWrapper>
  )
}