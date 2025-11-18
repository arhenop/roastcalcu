const display = document.getElementById("display");
const roast = document.getElementById("roast");

function press(value) {
    display.value += value;
    roast.textContent = "";
}

function clearDisplay() {
    display.value = "";
    roast.textContent = "Wow, you cleared it? After all that effort?";
}

const roasts = [
    "You really needed help with THAT? 💀",
    "Bro… even a potato could calculate this.",
    "Do you seriously not know basic math?",
    "I expected better from you ngl.",
    "Congrats, you pressed '='. Truly a genius move.",
    "If brains were RAM, you'd be running 2GB.",
    "You're the reason calculators exist.",
    "Math isn't mathing for you, huh?",
    "Damn… imagine needing a calculator for this.",
    "Even my circuits are disappointed."
];

function calculate() {
    try {
        if (display.value.trim() === "") {
            roast.textContent = "You gotta type something first, Einstein.";
            return;
        }

        let result = eval(display.value);
        display.value = result;

        // Give a random roast
        roast.textContent = roasts[Math.floor(Math.random() * roasts.length)];

    } catch {
        roast.textContent = "You broke the math. Congrats.";
    }
}
