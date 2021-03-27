import React from 'react';
import styled from 'styled-components';

const ChevronContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    display: block;
    position: relative;
    
    &:nth-child(2),
    &:first-child {
      height: 2px;
      &:after,
      &:before {
        content: '';
        position: absolute;
        background-color: black;
        width: 2px;
        height: 2px;
      }
    }

    &:first-child {
      &:after {
        left: 4px;
      }
      &:before {
        right: 4px;
      }
    }

    &:nth-child(2) {
      &:after {
        left: 2px;
      }
      &:before {
        right: 2px;
      }
    }

    &:last-child {
      background-color: black;
      width: 2px;
      height: 2px;
    }
  }
`


export const DownChevron = () => {
  return (
    <ChevronContainer>
      <span />
      <span />
      <span />
    </ChevronContainer>
  )
}