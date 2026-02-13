const text = "I’m Oracl3, a Full-Stack Web Developer based in Nigeria";
const speed = 80;
const displayTimes = 3;

const typingElement = document.getElementById("typing-text");

let index = 0;
let currentCount = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    // typing finished once
    currentCount++;

    if (currentCount < displayTimes) {
      // reset and type again
      setTimeout(() => {
        typingElement.textContent = "";
        index = 0;
        typeText();
      },10000); // pause before restarting
    }
  }
}

typeText();
