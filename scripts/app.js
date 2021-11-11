/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let x = 400;
let y = 300;
let color = 0;
let lightness = 50;
let isDrawing = false;

window.addEventListener("keydown", (e) => {
	//console.log(e.key);

	switch (e.key) {
		case "e":
			lightness = 100;
			break;

		case "g":
			color = 120;
		default:
			lightness = 50;
	}
});

canvas.addEventListener("mousedown", () => {
	isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
	isDrawing = false;
});

canvas.addEventListener("mousemove", (e) => {
	// console.log(e);
	if (!isDrawing) return;

	ctx.fillStyle = `hsla(${color}, 100%, ${lightness}%, 1)`;
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 50, 0, Math.PI * 2, false);
	ctx.fill();
	//color = color + 10;
});
