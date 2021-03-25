import React from 'react';
import styled, { keyframes, css} from 'styled-components';
import { getEyeColor } from 'utils/rarity';

const downExcite = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(4px);
  }
`;

const upExcite = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-1px);
  }
`;

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
    transform: translateY(-0.5px);
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

  .gotchi-primary,
  .gotchi-primary-mouth {
    fill: ${({ primaryColor }) => primaryColor};
  }
  .gotchi-secondary {
    fill: ${({ secondaryColor }) => secondaryColor};
  }
  .gotchi-cheek{
    fill: ${({ cheekColor }) => cheekColor};
  }
  .gotchi-eyeColor{
    fill:${({ eyeColor }) => eyeColor};
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
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(2);
  }

  .gotchi-shadow {
    animation-name: ${up};
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(2);
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
      animation-name: ${downExcite};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
      animation-timing-function: steps(2);
    }

    .gotchi-shadow {
      animation-name: ${upExcite};
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
      animation-timing-function: steps(2);
    }
  `}
`

export const GotchiSelectImage = ({
  svgData,
  readyToPet,
  collateralColors,
  eyeColorScore
}) => {
  // Prevent global overide of colors
  const { cheekColor, primaryColor, secondaryColor } = collateralColors;
  const eyeColor = getEyeColor(eyeColorScore, primaryColor.replace("0x", '#'));
  return (
    <GotchiContainer
      dangerouslySetInnerHTML={{ __html: svgData || ''}}
      readyToPet={readyToPet}
      primaryColor={primaryColor.replace("0x", '#')}
      secondaryColor={secondaryColor.replace("0x", '#')}
      cheekColor={cheekColor.replace("0x", '#')}
      eyeColor={eyeColor}
    />
  )
}