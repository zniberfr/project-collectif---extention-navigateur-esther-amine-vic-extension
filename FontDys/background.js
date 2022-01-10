let font = 'Verdana';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ font });
  console.log(`Default font set to ${font}`);
});