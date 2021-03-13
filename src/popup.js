import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default';
import Fonts from 'themes/fonts';
import Typography from 'themes/typography';
import App from './App';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fonts />
      <Typography />
      <App />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
