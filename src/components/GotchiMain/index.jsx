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

const KinshipContainer = styled.div`
  color: white;
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 4px;
  h2 {
    font-weight: normal;
  }
`

export const GotchiMain = ({ selectedGotchi }) => {
  return (
    <Container>
      <Header className="full-width">
        <NamePanel className="yellow-panel full-width">
          <h1>{selectedGotchi?.name}</h1>
        </NamePanel>
        <KinshipContainer>
          <h2>KINSHIP: ({selectedGotchi?.kinship})</h2>
          <p>Next Interaction: {selectedGotchi?.lastInteracted}</p>
        </KinshipContainer>
      </Header>
      <Gotchi svgData={selectedGotchi?.svg} />
      <Button>Pet</Button>
    </Container>
  )
}