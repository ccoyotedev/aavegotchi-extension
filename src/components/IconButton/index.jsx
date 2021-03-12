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

const Button = styled.button`
  height: 20px;
  width: 20px;
  font-size: 18px;
  background-color: #FA34F2;
  color: white;
  display: grid;
  place-items: center;
  font-size: 2rem;
  position: relative;
  border: none;
  z-index: 1;
`

export const IconButton = (props) => {
  return (
    <ButtonWrapper>
      <Button onClick={props.onClick}>
        i
      </Button>
    </ButtonWrapper>
  )
}