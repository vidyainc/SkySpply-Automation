function simulateClick(element) {
  var evt = new MouseEvent("click", {
    bubbles: true, // Event should bubble for most general use cases
    cancelable: true // Event should be cancelable
  });
  var result = element.dispatchEvent(evt);

  // Fallback to direct click if the event dispatch returns false
  if (!result) {
    element.click();
  }
}

function clickNextButton() {
  var nextButton = document.querySelector('button.awsui_arrow_fvjdu_1d0ac_141.awsui_button_fvjdu_1d0ac_113[aria-label="Next page"]');
  var disabledClass = 'awsui_button-disabled_fvjdu_1d0ac_136';

  if (nextButton && !nextButton.classList.contains(disabledClass)) {
    simulateClick(nextButton);
    return "true";
  }
  return "false";
}

// var result = clickNextButton();
// console.log(result);
