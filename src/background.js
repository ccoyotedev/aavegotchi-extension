chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case ('gotchi'):
      chrome.storage.local.set({ gotchi: message.data });
  }
});