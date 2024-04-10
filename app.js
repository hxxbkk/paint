const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); //moveTo다른 곳으로 이동
ctx.lineTo(150, 50); //lineTo선을 그으면서 이동
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();
