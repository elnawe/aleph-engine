// This error handler tries to compare parameter with a serie of validators. If one of these validators
// fails calls a catch(error) and break the app.
// This is useful to catch error before user continues with development. This should happen with every
// setter in the application.
import _ from 'lodash';

export default function (cfg) {
    try {
        if (_.isUndefined(cfg.state)) throw 'state object does not exist';
        if (!_.isObject(cfg)) throw 'should be an object';
    }
    catch (error) {
        console.error('ERROR: ', error);
    }
};
