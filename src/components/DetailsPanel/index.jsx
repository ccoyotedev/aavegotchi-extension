import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { getRarityColor } from 'utils/rarity';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`

const Panel = styled.div`
  border: 4.5px solid #000000;
  border-radius: 35px;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 35px 1fr 15px;
`

const PanelHeader = styled.div`
  display: grid;
  place-items: center;
  color: white;
  background-color: ${({ theme, color }) => color ? color : theme.palette.purple};

  h2 {
    margin: 0;
    font-weight: normal;
  }
`

const DetailsContent = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`

const TraitRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 8px;

  p {
    color: black;
    text-transform: uppercase;
    margin: 0;
  }

  .trait {
    font-weight: bold;
  }
`

const PanelFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.purple};
`

export const DetailsPanel = ({ gotchi, closePanel }) => {
  const { numericTraits, modifiedNumericTraits } = gotchi;

  const getValue = (currentValue, modifiedValue) => {
    if (currentValue == modifiedValue) {
      return currentValue;
    } else if (currentValue < modifiedValue) {
      return `${currentValue} + ${modifiedValue - currentValue}`
    } else {
      return `${currentValue} - ${currentValue - modifiedValue}`
    }
  }

  return (
    <Wrapper>
      <CloseButtonContainer>
        <IconButton onClick={closePanel} icon="x" />
      </CloseButtonContainer>
      <Panel>
        <PanelHeader color={getRarityColor(gotchi?.modifiedRarityScore)}>
          <h2>
            Rarity score:
            {' '}
            {gotchi?.collateral}
            {' '}
            {gotchi?.baseRarityScore !== gotchi?.modifiedRarityScore
              && `(${gotchi?.baseRarityScore})`
            }
          </h2>
        </PanelHeader>
        <DetailsContent>
          <TraitRow>
            <p className="trait">⚡️ Energy</p>
            <p className="trait-value">
              ({getValue(numericTraits.energy, modifiedNumericTraits.energy)})
            </p>
          </TraitRow>
          <TraitRow>
            <p className="trait">👹 Aggression</p>
            <p className="trait-value">
              ({getValue(numericTraits.aggression, modifiedNumericTraits.aggression)})
            </p>
          </TraitRow>
          <TraitRow>
            <p className="trait">👻 Spookiness</p>
            <p className="trait-value">
              ({getValue(numericTraits.spookiness, modifiedNumericTraits.spookiness)})
            </p>
          </TraitRow>
          <TraitRow>
            <p className="trait">🧠 Brain Size</p>
            <p className="trait-value">
              ({getValue(numericTraits.brainSize, modifiedNumericTraits.brainSize)})
            </p>
          </TraitRow>
          <TraitRow>
            <p className="trait">👀 Eye Shape</p>
            <p className="trait-value">
              ({getValue(numericTraits.eyeShape, modifiedNumericTraits.eyeShape)})
            </p>
          </TraitRow>
          <TraitRow>
            <p className="trait">👁 Eye Color</p>
            <p className="trait-value">
              ({getValue(numericTraits.eyeColor, modifiedNumericTraits.eyeColor)})
            </p>
          </TraitRow>
        </DetailsContent>
        <PanelFooter />
      </Panel>
    </Wrapper>
  )
}