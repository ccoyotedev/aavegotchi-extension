import React from 'react';
import styled from 'styled-components';
import { Gotchi } from '../Gotchi';
import { IconButton } from '../IconButton';
import { Button } from '../Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Header = styled.header`
  width: 100%;
`

const NamePanel = styled.div`
  background-color: #FFFA65;
  border: 6px solid #E5DF40;
  color: black;
  padding: 4px 32px;
  width: 100%;

  h1 {
    color: black;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
  }
`

const LevelContainer = styled.div`
  color: white;
  position: relative;
  text-align: center;
  width: 100%;
`

const InfoButtonContainer = styled.div`
  position: absolute;
  right: 0.4rem;
  top: 0;
`

export const GotchiMain = ({ selectedGotchi, gotchiSVG }) => {
  return (
    <Container>
      <Header className="full-width">
        <NamePanel className="yellow-panel full-width">
          <h1>{selectedGotchi?.name}</h1>
        </NamePanel>
        <LevelContainer>
          <h2>Level: {selectedGotchi?.level}</h2>
          <InfoButtonContainer>
            <IconButton onClick={() => setViewDetails(true)} />
          </InfoButtonContainer>
        </LevelContainer>
      </Header>
      <Gotchi svgData={gotchiSVG} />
      <Button>Pet</Button>
    </Container>
  )
}