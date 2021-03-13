import 'libs/polyfills';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import useAaveContract from 'hooks/aaveContract';

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

document.body.appendChild(root);

const App = () => {
  const { selectedGotchi } = useAaveContract();

  useEffect(() => {
    if (selectedGotchi) {
      console.log(selectedGotchi);
      chrome.runtime.sendMessage({
        type: 'gotchi',
        data: {
          ...selectedGotchi,
        }
      })
    }
  }, [selectedGotchi])

  return (
    <div />
  );
};

ReactDOM.render(<App />, appContainer);
