import CanvasManager from 'canvas/CanvasManager';

let canvas = new CanvasManager({ id: 'aleph', height: '600', width: '800' });

document.body.appendChild(canvas.node);

canvas.createCircles(50);
