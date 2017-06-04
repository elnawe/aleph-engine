// sprite manager core library

export default class SpriteCore {

    constructor (props) {
        this.animation = []; // Animation array. WIP
        // this.Animator; // Animator class. WIP
        this.current = 0; // number: Current sprite image.
        this.startingSpritePosition = 0; // First sprite to render
        this.sprite = props.sprite || []; // Collection of images.
    }

    get current_sprite () {
        return this.sprite[this.current];
    }
};
