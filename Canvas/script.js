
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const color = document.getElementById("color");
const size = document.getElementById("size");
const clear = document.getElementById("clear");

let drawing = false;

// Start drawing
canvas.addEventListener("mousedown", function(event) {
    drawing = true;
    
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(
        (event.clientX - rect.left) * canvas.width / rect.width,
        (event.clientY - rect.top) * canvas.height / rect.height
    );
});

// Draw when mouse moves
canvas.addEventListener("mousemove", function(event) {
    if (drawing) {
        const rect = canvas.getBoundingClientRect();

        ctx.lineTo(
            (event.clientX - rect.left) * canvas.width / rect.width,
            (event.clientY - rect.top) * canvas.height / rect.height
        );

        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.lineCap = "round";
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener("mouseup", function() {
    drawing = false;
});

canvas.addEventListener("mouseleave", function() {
    drawing = false;
});

// Clear canvas
clear.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
