/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let x = 400;
let y = 300;

// ctx.fillRect(x, y, 50, 50);

let color = 0;

canvas.addEventListener("mousemove", (e) => {
	// console.log(e);
	ctx.fillStyle = `hsla(${color}, 100%, 50%, 1)`;
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 50, 0, Math.PI * 2, false);
	ctx.fill();
	color = color + 10;
});
