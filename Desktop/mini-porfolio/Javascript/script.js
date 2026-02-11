
  const text = "I’m Oracl3, a Full-Stack Web Developer based in Nigeria";
  const speed = 80; // typing speed in ms

  let index = 0;
  const typingElement = document.getElementById("typing-text");

  function typeText() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    } 
  }
  typeText();

