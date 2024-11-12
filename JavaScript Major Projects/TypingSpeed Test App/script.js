let passages = [];
let currentText = "";
let startTime , endTime;
let typedText ="";

// fetch passages from json 
fetch('passages.json')
    .then(response => response.json())
    .then(data => {
        passages = data.passages;
        console.log('Passages loaded:', passages);
    })
    .catch(error => console.error('Error loading passges:', error));


// start the typing test
function startTest(){
    // check if passages are loaded
    if(passages.length==0){
        alert('Passages are not loaded!');
        return;
    }

    // select random passage
    currentText = passages[Math.floor(Math.random() * passages.length)];
    document.getElementById("textDisplay").textContent = currentText;

    // Reset variable and UI elements 
    document.getElementById("wpm").textContent = "WPM: 0";
    document.getElementById("accuracy").textContent = "Accuracy: 0%";
    document.getElementById("errors").textContent = "Errors: 0";
    typedText = "";

    // Set timer and start counting time
    startTime = new Date().getTime();
    timerInterval = setInterval(updateWPM, 1000);
}

