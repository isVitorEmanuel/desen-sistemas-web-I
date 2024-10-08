const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

const buttonClear = document.getElementById('button-clear');
const shapeSelect = document.getElementById('type-shape');

let painting = false;
let startX, startY;
let currentShape = 'LINE';

function startPosition(e) {
    painting = true;
    const rect = canvas.getBoundingClientRect();

    startX = (e.clientX - rect.left) * (canvas.width / rect.width);
    startY = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (currentShape === 'LINE') { draw(e); }
}

function endPosition(e) {
    painting = false;
    
    if (currentShape === 'RECTANGULE') { drawRectangle(e); }  
    if (currentShape === 'CIRCLE') { drawCircle(e); }

    context.beginPath()
}

function draw(e) {
    if (!painting || currentShape !== 'LINE') { return };

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = '#6687E8';

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function drawRectangle(e) {
    const rect = canvas.getBoundingClientRect();
    const endX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const endY = (e.clientY - rect.top) * (canvas.height / rect.height);

    const width = endX - startX;
    const height = endY - startY;

    context.lineWidth = 2;
    context.strokeStyle = '#6687E8';
    context.strokeRect(startX, startY, width, height);
    context.beginPath()
}

function drawCircle(e) {
    const rect = canvas.getBoundingClientRect();
    const endX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const endY = (e.clientY - rect.top) * (canvas.height / rect.height);

    const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)) / 2;

    const centerX = (startX + endX) / 2;
    const centerY = (startY + endY) / 2;

    context.lineWidth = 2;
    context.strokeStyle = '#6687E8';
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.stroke();
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

shapeSelect.addEventListener('change', (e) => { currentShape = e.target.value; });

buttonClear.addEventListener('click', () => { context.clearRect(0, 0, canvas.width, canvas.height); });