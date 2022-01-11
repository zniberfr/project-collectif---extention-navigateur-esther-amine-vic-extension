let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetFonts = ['Verdana', 'Times New Roman', 'Courier New', 'Franklin Gothic Medium'];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let font = event.target.dataset.font;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ font });
}

// Add a button to the page for each supplied color
function constructOptions(buttonFonts) {
  chrome.storage.sync.get("font", (data) => {
    let currentFont = data.font;
    // For each color we were provided…
    for (let buttonFont of buttonFonts) {
      // …create a button with that color…
      let button = document.createElement("button");
      button.dataset.font = buttonFont;
      button.style.fontFamily = buttonFont;
      button.id = buttonFont
      // …mark the currently selected color…
      if (buttonFont === currentFont) {
        button.classList.add(selectedClassName);
      }
      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
      document.getElementById(buttonFont).innerHTML = buttonFont;
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetFonts);