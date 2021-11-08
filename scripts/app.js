/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let x = 400;
let y = 300;

//ctx.fillRect(x, y, 50, 50);

ctx.arc(x, y, 50, 0, Math.PI * 2, false);
