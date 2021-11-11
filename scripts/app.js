/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class Brush {
	constructor(color) {
		this.color = color;
		this.x = 0;
		this.y = 0;
		this.isDrawing = false;
		this.lightness = 50;
	}

	startDrawing() {
		this.isDrawing = true;
	}
	stopDrawing() {
		this.isDrawing = false;
	}

	changeMode(mode) {
		switch (mode) {
			case "e":
				this.lightness = 100;
				break;

			case "g":
				this.color = 120;
			default:
				this.lightness = 50;
		}
	}

	draw(x, y) {
		if (!this.isDrawing) return;

		ctx.fillStyle = `hsla(${this.color}, 100%, ${this.lightness}%, 1)`;
		ctx.beginPath();
		ctx.arc(x, y, 50, 0, Math.PI * 2, false);
		ctx.fill();
	}
}

let activeBrush = new Brush(0);

window.addEventListener("keydown", (e) => {
	activeBrush.changeMode(e.key);
});

canvas.addEventListener("mousedown", () => {
	activeBrush.startDrawing();
});

canvas.addEventListener("mouseup", () => {
	activeBrush.stopDrawing();
});

canvas.addEventListener("mousemove", (e) => {
	// console.log(e);
	activeBrush.draw(e.offsetX, e.offsetY);
});
