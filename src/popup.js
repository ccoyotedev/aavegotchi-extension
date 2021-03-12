import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import defaultTheme from 'themes/default';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box width="200px" padding={3}>
        
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
