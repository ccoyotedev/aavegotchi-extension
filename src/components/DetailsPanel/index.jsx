import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../IconButton';

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
  background-color: ${({ theme }) => theme.palette.purple};

  h2 {
    font-size: 14px;
    margin: 0;
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
  align-items: center;
  padding: 0 12px;

  p {
    color: black;
    text-transform: uppercase;
    margin: 0;
    font-size: 10px;
  }
`

const PanelFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.purple};
`

export const DetailsPanel = ({ gotchi, closePanel }) => {
  return (
    <Wrapper>
      <CloseButtonContainer>
        <IconButton onClick={closePanel} icon="x" />
      </CloseButtonContainer>
      <Panel>
        <PanelHeader>
          <h2>Rarity score: {gotchi?.rarityScore}</h2>
        </PanelHeader>
        <DetailsContent>
          <TraitRow>
            <p className="trait">Energy</p>
            <p className="trait-value">({gotchi?.numericTraits.energy})</p>
          </TraitRow>
          <TraitRow>
            <p className="trait">Aggression</p>
            <p className="trait-value">({gotchi?.numericTraits.aggression})</p>
          </TraitRow>
          <TraitRow>
            <p className="trait">Spookiness</p>
            <p className="trait-value">({gotchi?.numericTraits.spookiness})</p>
          </TraitRow>
          <TraitRow>
            <p className="trait">Brain Size</p>
            <p className="trait-value">({gotchi?.numericTraits.brainSize})</p>
          </TraitRow>
          <TraitRow>
            <p className="trait">Eye Shape</p>
            <p className="trait-value">({gotchi?.numericTraits.eyeShape})</p>
          </TraitRow>
          <TraitRow>
            <p className="trait">Eye Color</p>
            <p className="trait-value">({gotchi?.numericTraits.eyeColor})</p>
          </TraitRow>
        </DetailsContent>
        <PanelFooter />
      </Panel>
    </Wrapper>
  )
}