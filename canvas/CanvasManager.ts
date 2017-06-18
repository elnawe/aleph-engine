// CanvasManager class controls how <canvas> should behave, also it gives it
// properties and makes it work as application should expect.
import * as _ from 'lodash';
import CanvasCore from 'canvas/CanvasCore';

class CanvasManager extends CanvasCore {

    constructor(settings: CanvasSettings) {
        super(settings);
    }

    createCircles(population: number): void {
        // TODO: Remove temporary function.
        let index = 0;

        for (index; index < population; index++) {
            this.draw();
        }
    }

    draw(): void {
        // TODO: Remove temporary function.
        let colors = ['red', 'green', 'blue', 'pink', 'yellow'];
        let ctx: any = this.node.getContext('2d');
        ctx.fillStyle = colors[_.random(0, colors.length)];
        ctx.beginPath();
        ctx.arc(
            _.random(1, 750, true),
            _.random(1, 560, true),
            _.random(10, 30, true),
            0,
            2 * Math.PI,
            false
        );
        ctx.closePath();
        ctx.fill();
    }
}


export default CanvasManager;
