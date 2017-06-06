// data store is a main static class that has all the common logic to manage any kind of store.
// use this common class to extend other stores...
// this logic could probably be changed with Redux. <-- NOT
import _ from 'lodash';
import { EventEmitter } from 'events';

export default class DataStore extends EventEmitter {

    constructor (props) {
        super();
        this.name = props.name + 'Store';
        this.state = _.extend({}, props.state, JSON.parse(localStore.getItem(this.name)));
    }

    set update_state (o) {
        // @Information: updateInformation is an object that contains at least 2 keys.
        // It contains state which is the new information to update in the store and also
        // contains quietly, a boolean that triggers changes if it's not true.
        _.extend(this.state, o.state);
        if (!o.quietly) this.handle_store_change();
    }

    handle_store_change () {
        // @Information: If change is emitted this method should save new information to storage.
        // This method should know the platform for which store it's calling.
        this.emit('change');
        // localStore.setItem(this.name, JSON.stringify(this.state)); // TODO: move this to Persistence
    }
};
