import React, { useEffect, useState } from 'react';
import Box from 'components/Box';
import { IconButton } from 'components/IconButton';
import { GotchiMain } from 'components/GotchiMain';
import { DetailsPanel } from 'components/DetailsPanel';
import { EmptyState } from 'components/EmptyState';
import styled from 'styled-components';

const InfoButtonContainer = styled.div`
  position: absolute;
  right: 26px;
  top: 26px;
`

export default () => {
  const [ gotchis, setGotchis ] = useState([]);
  const [ isConnected, setIsConnected ] = useState(false);
  const [ view, setView ] = useState('EMPTY');

  useEffect(() => {
    // Get connection status
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: "connection",
        },
        function(response) {
          console.log(response);
          if (response) {
            setIsConnected(response.connected);
          }
        });
    });

    // Get Gotchi
    chrome.storage.local.get("gotchis", (res) => {
      setGotchis(res.gotchis);
    });
  }, [])

  useEffect(() => {
    if (gotchis.length > 0) {
      setView('MAIN')
    }
  }, [gotchis])

  const renderContent = (contentView) => {
    switch (contentView) {
      case 'EMPTY':
        return <EmptyState connected={isConnected} />
      case 'MAIN':
        return (
          <>
            <InfoButtonContainer>
              <IconButton onClick={() => setView('DETAILS')} icon="i" />
            </InfoButtonContainer>
            <GotchiMain selectedGotchi={gotchis[0]} connected={isConnected} />
          </>
        )
      case 'DETAILS':
        return <DetailsPanel gotchi={gotchi} closePanel={() => setView('MAIN')} />
      default:
        return <EmptyState connected={isConnected} />
    }
  }

  return (
    <Box>
      {renderContent(view)}
    </Box>
  )
}