const texts = [
    { text: "Computer Engineer", class: "type1" },
    { text: "Youtuber", class: "type2" },
    { text: "Influencer", class: "type3" }
];
const typewriterElement = document.querySelector('.typewriter-text');
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].text.length) {
        typewriterElement.innerHTML += texts[textIndex].text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = texts[textIndex].text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

function startTyping() {
    typewriterElement.className = `typewriter-text ${texts[textIndex].class}`;
    type();
}

startTyping();