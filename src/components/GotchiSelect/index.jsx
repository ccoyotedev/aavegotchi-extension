import React from 'react';
import styled from 'styled-components';

const GotchiSelectContainer = styled.div`
  width: 100%;
  height: calc(100% + 16px);
  margin: -8px 0;
  overflow-y: scroll;
`

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
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

const GotchiImage = styled.div`
  width: 72px;
  height: 100%;
  display: grid;
  place-items: center;

  .gotchi-bg {
    display: none;
  }
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

export const GotchiSelect = ({ gotchis, handleSelect }) => {
  return (
    <GotchiSelectContainer>
      <TotalContainer>
        <p>TOTAL: {gotchis.length}</p>
      </TotalContainer>
      {gotchis.map((gotchi, i) => {
        return (
          <GotchiContainer key={i} onClick={() => handleSelect(i)}>
            <GotchiImage
              dangerouslySetInnerHTML={{ __html: gotchi.svg }}
            />
            <Details>
              <h2>{gotchi.name} ({gotchi.tokenId})</h2>
              <hr />
              <p>RARITY SCORE: {gotchi.rarityScore}</p>
              <p>LEVEL: {gotchi.level}</p>
              <p>HAUNT: {gotchi.haunt}</p>
            </Details>
          </GotchiContainer>
        )
      })}
    </GotchiSelectContainer>
  )
}