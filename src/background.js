chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case ('gotchis'):
      chrome.storage.local.set({ gotchis: message.data.gotchis });
  }
});