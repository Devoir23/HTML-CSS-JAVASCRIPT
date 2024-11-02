const colorPicker = document.getElementById("colorPicker");
        const canvasColor = document.getElementById("canvasColor");
        const canvas = document.getElementById("myCanvas");
        const clearButton = document.getElementById("clearButton");
        const saveButton = document.getElementById("saveButton");
        const fontPicker = document.getElementById("fontPicker");
        const retrieveButton = document.getElementById('retrieveButton');
        const ctx = canvas.getContext('2d')


// Color picker event handler - Updates both stroke and fill colors when user selects a new color
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

// Mouse down event - Starts drawing mode and stores initial coordinates
canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})

// Mouse move event - Draws lines while mouse is held down and moving
// Creates continuous lines by connecting last position to current position
canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
})

// Mouse up event - Stops drawing mode when mouse button is released
canvas.addEventListener('mouseup',()=>{
    isDrawing = false;
})

// Canvas background color change event - Fills entire canvas with selected color
canvasColor.addEventListener('change',(e)=>{
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,canvas.width,canvas.height);
})

// Line width change event - Updates stroke width when user changes font/line size
fontPicker.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value;
})

// Clear button event handler - Clears the canvas
clearButton.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

/* Save button event - Does two things:
1. Saves canvas state to localStorage for later retrieval
2. Triggers download of canvas as PNG file*/ 
saveButton.addEventListener('click',()=>{
    localStorage.setItem('canvasContents',canvas.toDataURL());

    let link = document.createElement('a');
    link.download = 'my-canvas.png';
    link.href = localStorage.getItem('canvasContents');
    link.click();
})

// Retrieve button event - Retrieves canvas state from localStorage and redraws it on the canvas
retrieveButton.addEventListener('click',()=>{
    let savedCanvas = localStorage.getItem('canvasContents');

    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img,0,0);
    }
})

