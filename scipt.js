const text = ["Front-End Developer", "UI Designer", "BCA Student"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    if (index >= text.length) index = 0;

    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();