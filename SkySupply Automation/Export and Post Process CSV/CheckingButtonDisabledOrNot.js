function checkButtonState() {
    // Modify the selector to target the specific button you want to check
    // The button must have both the specified classes and the aria-label 'Next page'
    var button = document.querySelector('.awsui_arrow_fvjdu_1d0ac_141.awsui_button_fvjdu_1d0ac_113[aria-label="Next page"]');
    
    // If the button is not found, return null
    if (!button) {
        return null;
    }

    // Check if the button has the 'disabled' class
    return !button.classList.contains('awsui_button-disabled_fvjdu_1d0ac_136');
}