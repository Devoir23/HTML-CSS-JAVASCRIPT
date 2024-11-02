const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const canvas = document.getElementById('myCanvas');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');
const retrieveButton = document.getElementById('retrieve');
const fontPicker = document.getElementById('fontPicker');
const ctx = canvas.getContext('2d');

// Set up Color Picker for Drawing
/* (e) => { ... }: This is an arrow function that acts as the event handler,
where e is the event object that provides details about the event
However, e isn’t used in this function, so we could omit it in this particular case.*/
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = colorPicker.value;
    ctx.fillStyle = colorPicker.value;
});

// Implement Drawing on the Canvas
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

// Set Background Color for Canvas
// Adjust Line Width Based on Font Picker
// Clear Canvas
// Save Canvas to Local Storage
// Retrieve Canvas from Local Storage
let isDrawing = false, lastX = 0, lastY = 0;

