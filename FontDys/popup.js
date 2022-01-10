// When the button is clicked, inject setPageBackgroundColor into current page
changeFont.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageFont,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageFont() {
    chrome.storage.sync.get("font", ({ font }) => {
      document.body.style.fontFamily = font;
    });
  }