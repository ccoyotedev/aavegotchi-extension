import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    background-color: ${({ secondary, theme }) =>
      secondary ? theme.palette.yellowAccent : 'black'
    };
    position: absolute;
    top: -3px;
    bottom: -3px;
    width: 100%;
    left: 0;
  }

  &:before {
    content: '';
    background-color: ${({ secondary, theme }) =>
      secondary ? theme.palette.yellowAccent : 'black'
    };
    position: absolute;
    left: -3px;
    right: -3px;
    height: 100%;
  }
`

const Button = styled.button`
  height: 15px;
  width: 15px;
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.palette.yellow : theme.palette.pink
  };
  color: ${({ secondary }) => secondary ? 'black' : 'white'};
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
    <ButtonWrapper secondary={props.secondary}>
      <Button onClick={props.onClick} secondary={props.secondary}>
        {props.icon}
      </Button>
    </ButtonWrapper>
  )
}