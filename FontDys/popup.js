// Initialize button with user's preferred font
let changeFont = document.getElementById("changeFont");

chrome.storage.sync.get("font", ({ font }) => {
  changeFont.style.fontFamily = font;
  changeFont.innerHTML = font;
});

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