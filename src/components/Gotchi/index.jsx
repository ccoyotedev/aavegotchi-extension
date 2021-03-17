import React from 'react';
import styled, { keyframes } from 'styled-components';

const down = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-1.5px);
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(1.5px);
  }
`;

const GotchiContainer = styled.div`
  width: 165px;
  height: 150px;
  margin-top: -14px;

  .gotchi-bg {
    display: none;
  }

  .gotchi-handsDownClosed,
  .gotchi-handsUp,
  .gotchi-handsDownOpen,
  .gotchi-handsDownClosed,
  .gotchi-body,
  .gotchi-eyeColor,
  .gotchi-collateral,
  .gotchi-cheek,
  .gotchi-primary-mouth,
  .gotchi-wearable {
    animation-name: ${down};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(2);
  }

  .gotchi-shadow {
    animation-name: ${up};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(2);
  }
`

export const Gotchi = (props) => {
  return (
    <GotchiContainer
      dangerouslySetInnerHTML={{ __html: props.svgData || ''}}
    />
  )
}