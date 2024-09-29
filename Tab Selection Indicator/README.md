# Tab Selection Indicator

This project demonstrates a tab selection indication with a slider that moves when you select different options.

## Files
- **index.html**: Contains the structure of the page.
- **style.css**: Responsible for styling the page, including the dark theme and layout of the options and slider.
- **script.js**: Implements the functionality for the interactive options and slider movement.

## Concept of the JavaScript Implementation

The JavaScript in this project is designed to create a dynamic interaction between the user and the interface by changing the appearance of the selected option and moving a slider bar beneath the active option.

### Key Concepts

1. **Event Handling**:
    - The `click` event is used to detect when a user clicks on one of the options.
    - A `forEach` loop adds an event listener to each option. When the user clicks on an option, the script runs a function to update the interface.

2. **Active State Management**:
    - The script assigns an `active` class to the selected option and removes the `active` class from any previously selected options.
    - This is done by looping through all the options and removing the `active` class from them, then adding it to the clicked option. The active state is visually distinguished by a different background color.

3. **Slider Movement**:
    - The slider is a div that moves horizontally under the selected option.
    - The position of the slider is updated by changing its `left` CSS property based on the `data-option` attribute of the clicked option. The `data-option` attribute holds a number that corresponds to the option (e.g., `1`, `2`, or `3`), which determines where the slider should move.
    - The slider width is set to `33.33%`, ensuring it matches the width of each option. As the user clicks, the slider moves by adjusting its `left` position with the formula:
      ```
      slider.style.left = `${(optionNumber - 1) * 33.33}%`;
      ```
      This means that if option 1 is selected, the slider is at `0%`, for option 2 it’s at `33.33%`, and for option 3 it's at `66.66%`.

### Detailed Walkthrough of `script.js`

1. **Query Selectors**:
    - `document.querySelectorAll('.option')`: Selects all elements with the class `option`, i.e., the three clickable options.
    - `document.querySelector('.slider')`: Selects the slider element that moves when an option is clicked.

2. **Event Listener for Each Option**:
    ```javascript
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'active' class from all options
            options.forEach(opt => opt.classList.remove('active'));
            
            // Add 'active' class to the clicked option
            option.classList.add('active');
            
            // Update the slider position
            const optionNumber = option.getAttribute('data-option');
            slider.style.left = `${(optionNumber - 1) * 33.33}%`;
        });
    });
    ```
    - For each option, the script listens for a click event.
    - When an option is clicked, the `active` class is applied to that option, and the slider is repositioned based on the `data-option` attribute.
    - The formula `(optionNumber - 1) * 33.33%` calculates the slider’s `left` property so that it aligns with the selected option.

### How to Use

1. **Open the Project**: 
    - Open `index.html` in your browser.

2. **Interact with the Options**:
    - Click on any of the three options to see the slider move and the selected option highlighted with a green background.

### Conclusion

This project demonstrates a simple yet effective way to handle UI interactivity using basic JavaScript. The key takeaway is how the `click` events and CSS manipulations (using JavaScript) can create a dynamic user interface, providing a smooth and intuitive experience for users.
