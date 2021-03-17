import React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  bottom: 100%;
  background-color: ${({ theme }) => theme.palette.purple};
  width: 180px;
  padding: 8px;
  left: -50%;

  * {
    text-align: center;
  }

  &:after {
    content: '';
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.palette.purple};
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
  }
`;

export const Tooltip = ({ children }) => {
  return (
    <TooltipContainer>
      {children}
    </TooltipContainer>
  )
}