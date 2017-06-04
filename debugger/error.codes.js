// Error codes returns a string formatted and adds extra data if provided.

function getErrorCode (errorCode) {
    const codes = {
        ERROR__TYPE_ERROR: '[TYPE ERROR]',
        ERROR__VALUE_ERROR: '[VALUE ERROR]',
        ERROR__IS_NOT_OBJECT: 'should be an object',
        ERROR__IS_NOT_STRING: 'should be a string'
    };

    return codes[errorCode];
};

export default function (errorCode, data) {
    return getErrorCode(errorCode);
};
