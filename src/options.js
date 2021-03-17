import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import defaultTheme from 'themes/default';

const OptionsPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
