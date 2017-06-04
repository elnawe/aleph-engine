// data store is a main static class that has all the common logic to manage any kind of store.
// use this common class to extend other stores...
// this logic could probably be changed with Redux.
import _ from 'lodash';
import { EventEmitter } from 'events';
import errorHandler from '../../debugger/error-handler';

const localStore = window.localStorage; // refactor this to its own library

export default class DataStore extends EventEmitter {

    constructor (props) {
        super();
        this.name = props.name + 'Store';
        this.state = _.extend({}, props.state, JSON.parse(localStore.getItem(this.name)));
    }

    set update_state (updateInformation) {
        // @Information: updateInformation is an object that contains at least 2 keys.
        // It contains state which is the new information to update in the store and also
        // contains quietly, a boolean that triggers changes if it's not true.
        errorHandler(updateInformation);
        _.extend(this.state, updateInformation.state);
        if (!updateInformation.quietly) this.handle_store_change();
    }

    handle_store_change () {
        console.log('Change is emitted');
        this.emit('change');
        localStore.setItem(this.name, JSON.stringify(this.state));
    }
};
