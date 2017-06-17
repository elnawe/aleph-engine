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

    createCanvas(settings: CanvasSettings): HTMLCanvasElement {
        // @Information: This function passes default properties to canvas and returns
        // a <canvas> Node.
        let c: HTMLCanvasElement = document.createElement('canvas');
        let dimensions = settings.dimensions;

        c.setAttribute('id', settings.name);
        c.setAttribute('height', dimensions.height.toString());
        c.setAttribute('width', dimensions.width.toString());

        return c;
    }
}

export default CanvasCore;
