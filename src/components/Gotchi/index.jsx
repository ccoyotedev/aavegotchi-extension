import React from 'react';
import styled, { keyframes } from 'styled-components';

const down = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(2px);
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(2px);
  }
`;

const GotchiContainer = styled.div`
  width: 220px;
  height: 220px;

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