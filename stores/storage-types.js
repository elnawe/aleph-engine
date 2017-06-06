// Storages object contains all kinds of storage. It exports all kinds of storages objects that you can import.
// Also you can import them altogether and instantiate what you need depending on what you have.
import moment from 'moment';

const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

const commonStore = {
    parse_incoming_object: function (o) {
        // @Information: this method takes gross data and returns it parsed to work on any kind of storage.
        // TODO: this data structure is work in progress. CONFIRM DATA STRUCTURE!
        return _.extend({}, {modified: moment().unix()}, _.omit(o, ['name', 'temporary']);
    }
};

const webStore = {

    save: function (o) {
        let parsedObject = commonStore.parse_incoming_data(o);
        let storage = this.storage_type(o.temporary);
        storage.setItem(o.name, JSON.stringify(parsedObject));
    },

    storage_type: function (temporary) {
        return (temporary) ? sessionStorage : localStorage;
    }
};

export {
    webStore
};
