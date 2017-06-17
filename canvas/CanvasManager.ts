// CanvasManager class controls how <canvas> should behave, also it gives it
// properties and makes it work as application should expect.
import CanvasCore from 'canvas/CanvasCore';

class CanvasManager extends CanvasCore {

    constructor(settings: CanvasSettings) {
        super(settings);
    }

    drawRect() {
        let ctx: any = this.node.getContext('2d');
        ctx.fillStile = '#ff0000';
        ctx.fillRect(0, 0, 150, 75);
    }
}


export default CanvasManager;
