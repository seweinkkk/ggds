// Set up canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load assets
const image = new Image();
image.src = 'https://example.com/your-image.png';  // Zamień na URL do Twojego obrazu

// Game variables
let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 50;

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw image
    ctx.drawImage(image, x - radius, y - radius, radius * 2, radius * 2);
    
    requestAnimationFrame(gameLoop);
}

image.onload = function() {
    gameLoop();
};

// Handle user input
window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
});
