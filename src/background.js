import { isReadyToPet } from 'utils/time';

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case ('gotchis'):
      const messageGotchis = message.data.gotchis;
      chrome.storage.local.set({ gotchis: messageGotchis });
      break;
    default:
      break;
  }

  // Sets extension icon badge when gotchi ready to pet
  chrome.storage.local.get("gotchis", (res) => {
    if (res.gotchis.some(gotchi => isReadyToPet(gotchi.lastInteracted))) {
      chrome.browserAction.setBadgeBackgroundColor({color:"rgb(115, 24, 244)"});
      chrome.browserAction.setBadgeText({text: '❤'});
    } else {
      chrome.browserAction.setBadgeText({text: ''});
    }
  });
});
