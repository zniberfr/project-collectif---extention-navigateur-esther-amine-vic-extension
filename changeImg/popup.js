let button = document.getElementById("changeImages")

button.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setImages,
    });
  });

function setImages() {
    let images = document.getElementsByTagName('img');
    for (let i of images) {
        i.src = 'https://pbs.twimg.com/media/Ee4-8YhXYAQ3fNK?format=jpg&name=large';
    }
  } 
