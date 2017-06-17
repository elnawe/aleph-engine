import CanvasManager from 'canvas/CanvasManager';

let canvas = new CanvasManager({ name: 'aleph', dimensions: { height: 600, width: 800 } });

canvas.drawRect();

document.body.appendChild(canvas.node);

canvas.drawRect();
