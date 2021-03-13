import React, { useEffect, useState } from 'react';
import Box from 'components/Box';
import { IconButton } from 'components/IconButton';
import { GotchiMain } from 'components/GotchiMain';
import { DetailsPanel } from 'components/DetailsPanel';
import styled from 'styled-components';

const InfoButtonContainer = styled.div`
  position: absolute;
  right: 26px;
  top: 26px;
`

export default () => {
  const [ gotchi, setGotchi ] = useState();
  const [ viewDetails, setViewDetails ] = useState(false);

  useEffect(() => {
    chrome.storage.local.get("gotchi", (res) => {
      setGotchi(res.gotchi);
    });
  }, [])

  return (
    <Box>
        {
          viewDetails
            ? <DetailsPanel gotchi={gotchi} closePanel={() => setViewDetails(false)} />
            : (
                <>
                  <InfoButtonContainer>
                    <IconButton onClick={() => setViewDetails(true)} icon="i" />
                  </InfoButtonContainer>
                  <GotchiMain selectedGotchi={gotchi} />
                </>
              )
        }
    </Box>
  )
}