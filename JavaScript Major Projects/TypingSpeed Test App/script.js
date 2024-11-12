let passages = [];
let currentText = "";
let startTime, timerInterval;
let typedText = "";
let errorCount = 0; // Track errors persistently

// Fetch passages from the JSON file
fetch('passages.json')
    .then(response => response.json())
    .then(data => {
        passages = data.passages;
        console.log('Passages loaded:', passages);
    })
    .catch(error => console.error('Error loading passages:', error));

// Function to start the typing test
function startTest() {
    if (passages.length === 0) {
        alert("Passages are not loaded yet. Please try again in a moment.");
        return;
    }

    currentText = passages[Math.floor(Math.random() * passages.length)];
    document.getElementById("textDisplay").textContent = currentText;

    // Reset variables and UI elements
    document.getElementById("textInput").value = "";
    document.getElementById("wpm").textContent = "0";
    document.getElementById("accuracy").textContent = " 0";
    document.getElementById("errors").textContent = " 0";
    document.getElementById("timer").textContent = "0";
    typedText = "";
    errorCount = 0; // Reset error count
    startTime = Date.now();
    document.getElementById("textInput").disabled = false;
    document.getElementById("textInput").focus();

    // Start updating WPM
    clearInterval(timerInterval); // Clear any previous interval
    timerInterval = setInterval(updateTimerAndWPM, 1000);
}

// Function to update the timer and WPM as the user types
function updateTimerAndWPM() {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = elapsedSeconds;

    const wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round((wordsTyped / elapsedSeconds) * 60) || 0;
    document.getElementById("wpm").textContent = ` ${wpm}`;
}

// Function to handle user input
function onInputChange() {
    const textInput = document.getElementById("textInput");
    typedText = textInput.value;

    // Check for errors dynamically, only increasing error count
    updateErrors();

    // Check if the input matches the passage text to end the test
    if (typedText === currentText) {
        endTest();
    }
}

// Function to update error count
function updateErrors() {
    const inputLength = typedText.length;

    // Only increment error count if there's an incorrect character that hasn't been corrected
    if (inputLength <= currentText.length && typedText[inputLength - 1] !== currentText[inputLength - 1]) {
        errorCount++;
    }

    document.getElementById("errors").textContent = ` ${errorCount}`;
}

// Function to end the typing test
function endTest() {
    clearInterval(timerInterval);
    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;

    const wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round(wordsTyped / elapsedMinutes);

    const accuracy = Math.max(0, 100 - (errorCount / currentText.length) * 100);

    // Display results
    document.getElementById("wpm").textContent = ` ${wpm}`;
    document.getElementById("accuracy").textContent = ` ${accuracy.toFixed(2)}`;
    document.getElementById("errors").textContent = `${errorCount}`;
    document.getElementById("textInput").disabled = true;
}

// Event listener for the start button
document.getElementById("startButton").addEventListener("click", startTest);

// Event listener for input changes
document.getElementById("textInput").addEventListener("input", onInputChange);
