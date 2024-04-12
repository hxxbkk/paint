const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  '#ffeaa7',
  '#fab1a0',
  '#55efc4',
  '#81ecec',
  '#a29bfe',
  '#fd79a8',
  '#d63031',
  '#e17055',
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', onClick);
