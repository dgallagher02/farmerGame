let rabbits = [];

function drawRabbits() {
    ctx.fillStyle = '#808080';
    rabbits.forEach(rabbit => {
        ctx.fillRect(rabbit.x, rabbit.y, rabbit.size, rabbit.size);
    });
}

function createRabbit() {
    const rabbit = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 - 2
    };
    rabbits.push(rabbit);
}