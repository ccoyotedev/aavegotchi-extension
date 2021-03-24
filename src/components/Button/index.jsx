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
  border-bottom: ${({ theme, small}) => small ? 'none' : `4.5px solid ${theme.palette.purpleAccent}`};
  border-right: ${({ theme, small }) => small ? 'none' : `4.5px solid ${theme.palette.purpleAccent}`};
  width: ${({small}) => small ? '72px' : '90px'};
  height: ${({small}) => small ? '16px' : '32px'};
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey};
    border-bottom: ${({ theme, small}) => small ? 'none' : `3px solid ${theme.palette.pink}`};
    border-right: ${({ theme, small}) => small ? 'none' : `3px solid ${theme.palette.pink}`};
    cursor: auto;
  }
`

export const Button = ({ disabled, onClick, small, children }) => {
  return (
    <ButtonWrapper>
      <StyledButton
        onClick={!disabled && onClick}
        disabled={disabled}
        small={small}
      >
        {children}
      </StyledButton>
    </ButtonWrapper>
  )
}