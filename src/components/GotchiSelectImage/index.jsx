import React from 'react';
import styled, { keyframes, css} from 'styled-components';

const down = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(4px);
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-1px);
  }
`;


// Add bounce speed modifer
const GotchiContainer = styled.div`
  width: 72px;
  height: 100%;
  display: grid;
  place-items: center;

  .gotchi-bg {
    display: none;
  }

  ${({ readyToPet }) => readyToPet && css`
    .gotchi-handsUp,
    .gotchi-sleeves-up {
      display: block;
    }

    .gotchi-handsDownOpen,
    .gotchi-handsDownClosed,
    .gotchi-sleeves-down {
      display: none;
    }

    .gotchi-handsUp,
    .gotchi-handsDownOpen,
    .gotchi-handsDownClosed,
    .gotchi-body,
    .gotchi-eyeColor,
    .gotchi-collateral,
    .gotchi-cheek,
    .gotchi-sleeves,
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
  `}
`

export const GotchiSelectImage = ({ svgData, readyToPet }) => {
  return (
    <GotchiContainer
      dangerouslySetInnerHTML={{ __html: svgData || ''}}
      readyToPet={readyToPet}
    />
  )
}