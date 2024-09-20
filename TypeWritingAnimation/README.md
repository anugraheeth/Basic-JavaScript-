
# Typewriter Animation Web Page

This project demonstrates a simple typewriter effect using HTML, CSS, and JavaScript. It dynamically types and erases different roles or professions (e.g., UI/UX Designer, FullStack Developer, Graphic Designer) with a typewriter-style animation.

## Features
- A rotating text effect that simulates typing and deleting text.
- Multiple text phrases with different colors for each phrase.
- Simple and clean design, centered on the page.
- Fully responsive layout with smooth animations.

## File Structure
- **index.html**: The main file containing the HTML structure for the typewriter animation.
- **style.css**: Handles the styling and keyframe animations for typing and the caret blinking effect.
- **script.css**: Controls the logic for typing, erasing, and cycling through the phrases.

## How it Works

### JavaScript Explanation:

The JavaScript controls the text typing and erasing animations using the `setTimeout()` function for time-based intervals.

### Key Components:

1. **Texts Array**:
   The array `texts` stores the phrases that will be typed out and their associated CSS class for styling the color.

   ```javascript
   const texts = [
       { text: "Computer Engineer", class: "type1" },
       { text: "Youtuber", class: "type2" },
       { text: "Influencer", class: "type3" }
   ];
   ```

2. **Typing Function (`type`)**:
   The `type` function types out each character from the current phrase one by one. It checks if all characters of the phrase have been typed, then waits for 2 seconds before calling the `erase` function.

   ```javascript
   function type() {
       if (charIndex < texts[textIndex].text.length) {
           typewriterElement.innerHTML += texts[textIndex].text.charAt(charIndex);
           charIndex++;
           setTimeout(type, 100);  // Controls typing speed (100 ms per character)
       } else {
           setTimeout(erase, 2000);  // Waits for 2 seconds after typing is complete
       }
   }
   ```

3. **Erasing Function (`erase`)**:
   The `erase` function erases the text one character at a time. Once all characters are erased, it switches to the next phrase and triggers the typing animation again.

   ```javascript
   function erase() {
       if (charIndex > 0) {
           typewriterElement.innerHTML = texts[textIndex].text.substring(0, charIndex - 1);
           charIndex--;
           setTimeout(erase, 50);  // Controls erasing speed (50 ms per character)
       } else {
           textIndex = (textIndex + 1) % texts.length;  // Move to the next phrase
           setTimeout(type, 500);  // Small delay before starting the next phrase
       }
   }
   ```

4. **Starting the Animation (`startTyping`)**:
   The `startTyping` function initializes the typing effect by setting the initial text color class and calling the `type` function to start the animation cycle.

   ```javascript
   function startTyping() {
       typewriterElement.className = \`typewriter-text \${texts[textIndex].class}\`;  // Apply initial color class
       type();  // Start typing
   }

   startTyping();  // Begins the typewriter animation when the page loads
   ```

### Animation Flow:
- The `type` function types out characters one by one until the entire phrase is displayed.
- After a brief pause, the `erase` function starts removing the characters.
- When the current phrase is completely erased, the next phrase is selected from the array, and the typing begins again, creating a loop.

## Technologies Used
- **HTML5**: For the structure of the page.
- **CSS3**: For styling and defining the typewriter animation effects (typing and blinking caret).
- **JavaScript**: For controlling the dynamic text animation and cycling through multiple phrases.

## How to Run
1. Download or clone the repository.
2. Open the `index.html` file in any modern web browser.
3. Watch the typewriter animation as it types and erases different text phrases.

## Customization
- You can easily modify the text by editing the `texts` array in the JavaScript section.
- To add more text phrases or change the colors, simply update the `texts` array with new text and class values.
  
  Example:
  ```javascript
  const texts = [
      { text: "Computer Engineer", class: "type1" },
      { text: "Software Engineer", class: "type2" },
      { text: "Creative Thinker", class: "type3" }
  ];
  ```

## Future Enhancements
- Add support for additional animations or transitions between phrases.
- Add a button or interaction to pause or restart the animation.
- Optimize for slower browsers or devices.

## License
This project is licensed under the MIT License.
