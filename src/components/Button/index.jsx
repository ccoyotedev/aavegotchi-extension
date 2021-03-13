import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    background-color: black;
    position: absolute;
    top: -3px;
    bottom: -3px;
    width: 100%;
    left: 0;
  }

  &:before {
    content: '';
    background-color: black;
    position: absolute;
    left: -3px;
    right: -3px;
    height: 100%;
  }
`

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.palette.purple};
  color: white;
  display: grid;
  place-items: center;
  position: relative;
  border: none;
  z-index: 1;
  border-bottom: 4.5px solid ${({ theme }) => theme.palette.purpleAccent};
  border-right: 4.5px solid ${({ theme }) => theme.palette.purpleAccent};
  width: 90px;
  height: 33px;
  cursor: pointer;
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