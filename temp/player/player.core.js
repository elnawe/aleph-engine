// player controller core
// player management file. Get player relative position
// makes player movement control

export default class PlayerCore {

    constructor (props) {
        super(props);

        this.health = props.health; // TODO: declare this!
        this.name = props.name;
        this.position = props.position; // [position-x, position-y]
    }

    // TODO: Probably moving all this to different classes.
    // This class should be only for data-type.
    // I don't know if taking care of position is the good approach.
    // Although this could manage all this information and then extend
    // the one that's gonna be instantiated with this core information.
    get player_health () {
        return this.health;
    }

    set player_health (healthModifier) {
        let newHealth = this.health - healthModifier;

        if (newHealth < 0) newHealth = 0;

        this.health = newHealth;
    }

    get player_name () {
        return this.name;
    }

    set player_name (newName) {
        this.name = newName;
    }

    get player_position () {
        // TODO: add utils library to clone arrays!
        return this.position.slice();
    }

    set player_position (positionModifier) {
        let actualPosition = this.player_position();

        this.position = [
            actualPosition[0] + positionModifier[0],
            actualPosition[1] + positionModifier[1]
        ];
    }
}
