import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Pixelar;
    src:
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.eot')}') format('eot'),
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.woff')}') format('woff'),
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.woff2')}') format('woff2'),
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.otf')}') format('otf'),
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.ttf')}') format('truetype'),
      url('${chrome.extension.getURL('/assets/fonts/PixelarRegular.svg')}') format('svg');
    font-weight: 500;
    font-style: normal;
  }
`;

export default Fonts;