let font = 'OpenDys2';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ font });
  console.log(`Default background font set to ${font}`);
});