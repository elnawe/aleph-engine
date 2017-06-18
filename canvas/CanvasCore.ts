import * as _ from 'lodash';

class CanvasCore {
    canvas: HTMLCanvasElement;

    constructor(settings: CanvasSettings) {
        this.canvas = this.createCanvas(settings);
    }

    get node(): HTMLCanvasElement {
        return this.canvas;
    }

    get context2D(): CanvasRenderingContext2D | null {
        return this.canvas.getContext('2d');
    }

    private createCanvas(settings: CanvasSettings): HTMLCanvasElement {
        // @Information: This function passes default properties to canvas and returns
        // a <canvas> Node.
        let c: HTMLCanvasElement = document.createElement('canvas');

        _.forEach(settings, (v: string, k: string) => {
            c.setAttribute(k, v);
        });

        return c;
    }
}

export default CanvasCore;
