import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, a, strong, button {
    font-family: 'Pixelar';
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 20px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  button {
    font-size: 16px;
  }
`;

export default Typography;