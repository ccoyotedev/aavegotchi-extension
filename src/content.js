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
  const { selectedGotchi, handlePet, account } = useAaveContract();

  const sendHandlePet = async (tokenId) => {
    const res = await handlePet(tokenId)
    console.log(res);
    return res;
  }

  const listener = (message, sender, sendResponse) => {
    switch(message.type) {
      case "pet":
        sendHandlePet(message.data.tokenId).then(() => {
          sendResponse({ success: true });
        })
        break;
      case "connection":
        console.log(window, window.ethereum);
        sendResponse({ connected: !!account })
        break;
      default:
        console.error("Unrecognised message: ", message);
    }
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(listener);

    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    }
  }, [account])

  useEffect(() => {
    if (selectedGotchi) {
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
