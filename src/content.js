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
  const { selectedGotchi, handlePet } = useAaveContract();

  const sendHandlePet = async (tokenId) => {
    const res = await handlePet(tokenId)
    return res;
  }

  const listener = (message, sender, sendResponse) => {
    switch(message.type) {
      case "pet":
        sendHandlePet(message.data.tokenId).then(() => {
          sendResponse({ success: true });
        })
        break;
      default:
        console.error("Unrecognised message: ", message);
    }
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(listener);

    if (selectedGotchi) {
      chrome.runtime.sendMessage({
        type: 'gotchi',
        data: {
          ...selectedGotchi,
        }
      })
    }

    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    }
  }, [selectedGotchi])

  return (
    <div />
  );
};

ReactDOM.render(<App />, appContainer);
