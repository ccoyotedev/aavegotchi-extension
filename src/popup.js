import 'libs/polyfills';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import defaultTheme from 'themes/default';
import { GotchiMain } from 'components/GotchiMain';

const Popup = () => {
  const [ gotchi, setGotchi ] = useState();

  useEffect(() => {
    chrome.storage.local.get("gotchi", (res) => {
      setGotchi(res.gotchi);
    });
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box width="200px">
        <GotchiMain selectedGotchi={gotchi} />
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
