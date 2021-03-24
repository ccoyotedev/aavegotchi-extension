import React, { useState } from 'react';
import { Button } from 'components/Button';
import { GotchiSelectImage } from 'components/GotchiSelectImage';
import styled from 'styled-components';
import { isReadyToPet } from 'utils/time';

const GotchiSelectContainer = styled.div`
  width: 100%;
  height: calc(100% + 16px);
  margin: -8px 0;
  overflow-y: scroll;
  position: relative;
`

const Popup = styled.div`
  position: absolute;
  color: black;
  background-color: ${({ theme }) => theme.palette.yellow};
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px 8px;
  text-align: center;
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 300ms ease;
  border: 5px solid ${({ theme }) => theme.palette.yellowAccent};
`

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  padding-left: 3px;
`

const GotchiContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 8px;
  padding-left: 4px;
  border: 5px solid ${({ theme }) => theme.palette.purple};
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 8px;
`

const Details = styled.div`
  overflow: hidden;
  h2,
  p {
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-weight: bold;
  }
`

export const GotchiSelect = ({ gotchis, handleSelect, connected }) => {
  const [ pending, setPending ] = useState(false);
  const [ popupActive, setPopupActive ] = useState(false);

  const handlePetAll = () => {
    const currentGotchis = [...gotchis];
    const gotchisReadyToPet = currentGotchis.filter(item => isReadyToPet(item.lastInteracted));
    const gotchiIds = gotchisReadyToPet.map(item => item.tokenId);

    if (gotchiIds.length > 0) {
      setPending(true);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            type: "pet",
            data: {
              tokenIds: gotchiIds,
            }
          },
          function(response) {
            if (response?.success) {
              setPending(false);
            }
          });
      });
    } else {
      setPopupActive(true);
      setTimeout(() => {
        setPopupActive(false)
      }, 2500)
    }
  }

  return (
    <GotchiSelectContainer>
      <Popup active={popupActive}>
        <h1>No Frens are in need of a pet</h1>
      </Popup>
      <TotalContainer>
        <Button
          small
          disabled={!connected || pending}
          onClick={handlePetAll}
        >
          Pet all
        </Button>
        <p>TOTAL: {gotchis.length}</p>
      </TotalContainer>
      {gotchis.map((gotchi, i) => {
        return (
          <GotchiContainer key={i} onClick={() => handleSelect(i)}>
            <GotchiSelectImage
              readyToPet={isReadyToPet(gotchi.lastInteracted)}
              svgData={gotchi.svg}
            />
            <Details>
              <h2>{gotchi.name} ({gotchi.tokenId})</h2>
              <hr />
              <p>RARITY SCORE: {gotchi.modifiedRarityScore}</p>
              <p>LEVEL: {gotchi.level}</p>
              <p>HAUNT: {gotchi.haunt}</p>
            </Details>
          </GotchiContainer>
        )
      })}
    </GotchiSelectContainer>
  )
}