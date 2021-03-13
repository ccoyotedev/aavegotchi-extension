import React from 'react';
import styled from 'styled-components';
import { Gotchi } from '../Gotchi';
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
  border: 4.5px solid #E5DF40;
  color: black;
  padding: 3px 24px;
  width: 100%;

  h1 {
    color: black;
    text-align: center;
  }
`

const LevelContainer = styled.div`
  color: white;
  position: relative;
  text-align: center;
  width: 100%;

  h2 {
    margin-bottom: 0;
  }
`

export const GotchiMain = ({ selectedGotchi }) => {
  return (
    <Container>
      <Header className="full-width">
        <NamePanel className="yellow-panel full-width">
          <h1>{selectedGotchi?.name}</h1>
        </NamePanel>
        <LevelContainer>
          <h2>Level: {selectedGotchi?.level}</h2>
        </LevelContainer>
      </Header>
      <Gotchi svgData={selectedGotchi?.svg} />
      <Button>Pet</Button>
    </Container>
  )
}