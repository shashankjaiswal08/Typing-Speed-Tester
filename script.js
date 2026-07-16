const paragraphs = ["The quick brown fox jumps over the lazy dog. It runs away into the forest, where it finds a safe place to rest. The night is cold, but the fox is warm and comfortable.",   "Technology has changed the way people communicate with each other. Around the world, it continues to grow faster than anyone could have imagined. Today, even a child can connect with someone on the other side of the planet.",   "The ability to type quickly and accurately is one of the most valuable skills a person can develop. In the modern world, almost every job requires the use of a computer keyboard. Those who type faster can work more efficiently, saving both time and energy.", "On January 1st, 2024, over 8 billion people celebrated the new year. According to reports, more than 75% of them made resolutions that they would break within 30 days. However, the 25% who succeeded had one thing in common: consistency.", "Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen. This reaction occurs inside the chloroplasts, using a green pigment called chlorophyll. Without photosynthesis, life on Earth, as we know it, would not exist.", "The sun rises every morning, bringing light and warmth to the world. People wake up, make their coffee, and prepare for another busy day. Life moves fast, but it is important to pause and enjoy the little moments.", "Books are the best friends a person can have. They teach us about the world, its history, and its people. Whether you read fiction or non-fiction, every book leaves something valuable behind.", "Music has the power to change a person's mood in seconds. A happy song can make you dance, while a sad one can bring tears to your eyes. It is truly one of the most powerful forms of human expression.", "Eating healthy food is one of the best things you can do for your body. Fruits, vegetables, and whole grains give you energy and keep you strong. A good diet, combined with regular exercise, leads to a longer and happier life.", "Traveling to new places opens your mind to different cultures and ways of life. Meeting new people, tasting new food, and seeing new landscapes makes you a better and more understanding person. Every journey teaches you something you cannot learn from a book."];

document.getElementById("paragraph").innerHTML = paragraphs[Math.floor(Math.random() * paragraphs.length)];

let timer = 60;
let interval;
let isTestRunning = false;

const input = document.getElementById("input-text");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);

function startTest() {
    if (isTestRunning) return;
    isTestRunning = true;
    input.disabled = false;
    input.focus();
    timer = 60;
    timerEl.innerHTML = `Time: ${timer}s`;
    interval = setInterval(() => {
        timer--;
        timerEl.innerHTML = `Time: ${timer}s`;
        updateStats();
        if (timer <= 0) {
            clearInterval(interval);
            isTestRunning = false;
            input.disabled = true;
            updateStats(); // Final update
        }
    }, 1000);
}

function updateStats() {
    const inputValue = input.value;
    const charsTyped = inputValue.length;
    const timeElapsed = 60 - timer; // seconds elapsed
    const timeInMinutes = timeElapsed / 60;
    let wpm = 0;
    if (timeInMinutes > 0) {
        wpm = Math.round((charsTyped / 5) / timeInMinutes);
    }
    wpmEl.innerHTML = `WPM: ${wpm}`;
    const para = document.getElementById("paragraph").innerText;
    let correct = 0;
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === para[i]) {
            correct++;
        }
    }
    let acc = 0;
    if (charsTyped > 0) {
        acc = Math.round((correct / charsTyped) * 100);
    }
    accuracyEl.innerHTML = `Accuracy: ${acc}%`;
}

function resetTest() {
    clearInterval(interval);
    isTestRunning = false;
    input.disabled = true;
    input.value = '';
    timer = 60;
    timerEl.innerHTML = `Time: 60s`;
    wpmEl.innerHTML = `WPM: 0`;
    accuracyEl.innerHTML = `Accuracy: 0%`;
    // New paragraph
    document.getElementById("paragraph").innerHTML = paragraphs[Math.floor(Math.random() * paragraphs.length)];
}