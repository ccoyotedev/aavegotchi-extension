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

const Button = styled.button`
  height: 15px;
  width: 15px;
  font-size: 14px;
  background-color: #FA34F2;
  color: white;
  display: grid;
  place-items: center;
  position: relative;
  border: none;
  z-index: 1;
  cursor: pointer;
  padding: 0;
`

export const IconButton = (props) => {
  return (
    <ButtonWrapper>
      <Button onClick={props.onClick}>
        {props.icon}
      </Button>
    </ButtonWrapper>
  )
}