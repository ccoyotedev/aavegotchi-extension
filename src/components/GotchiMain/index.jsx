import React, { useState } from 'react';
import { IconButton } from 'components/IconButton';
import styled from 'styled-components';
import { Gotchi } from '../Gotchi';
import { Button } from '../Button';
import { DownChevron } from '../DownChevron';
import { timeUntilNextInteraction } from 'utils/time';
import { Tooltip } from '../Tooltip';

const TooltipContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
`

const ButtonContainer = styled.div`
  position: relative;
`

const InfoButtonContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`

const PickGotchiContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`

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
  position: relative;

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

export const GotchiMain = ({
  selectedGotchi,
  connected,
  handleViewChange,
}) => {
  const [ pending, setPending ] = useState(false);
  const [ displayTooltip, setDisplayTooltip ] = useState(false);

  const handlePet = () => {
    setPending(true);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: "pet",
          data: {
            tokenIds: [selectedGotchi.tokenId],
          }
        },
        function(response) {
          if (response?.success) {
            setPending(false);
          }
        });
    });
  }

  // const handleConnect = () => {
  //   setPending(true);
  //   chrome.runtime.sendMessage(
  //     {
  //       type: "connect",
  //     },
  //     (response) => {
  //       if (response.success) {
  //         setPending(false);
  //         setIsConnected(true);
  //       }
  //     });
  // }

  const handleClick = () => {
    if (connected) {
      handlePet()
    }
  }

  return (
    <Container>
      <Header className="full-width">
        <NamePanel className="yellow-panel full-width">
          <PickGotchiContainer>
            <IconButton
              onClick={() => handleViewChange("SELECT")}
              secondary
            >
              <DownChevron />
            </IconButton>
          </PickGotchiContainer>
          <h1>{selectedGotchi?.name}</h1>
          <InfoButtonContainer>
            <IconButton onClick={() => handleViewChange("DETAILS")}>
              i
            </IconButton>
          </InfoButtonContainer>
        </NamePanel>
        <KinshipContainer>
          <h2>KINSHIP: ({selectedGotchi?.kinship})</h2>
          <p>{timeUntilNextInteraction(selectedGotchi?.lastInteracted)}</p>
        </KinshipContainer>
      </Header>
      <Gotchi svgData={selectedGotchi?.svg} />
      <ButtonContainer
        onMouseEnter={() => setDisplayTooltip(true)}
        onMouseLeave={() => setDisplayTooltip(false)}
      >
        {
          displayTooltip && !connected && (
            <TooltipContainer>
              <Tooltip>
                <h3>Not Connected!</h3>
                <p>Please refresh on a page connected to the Matic network.</p>
              </Tooltip>
            </TooltipContainer>
          )
        }
        <Button
          onClick={handleClick}
          disabled={!connected || pending}
        >
          Pet
        </Button>
      </ButtonContainer>
    </Container>
  )
}