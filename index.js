'use strict';

module.exports = function (json) {
    let qString = Object.keys(json).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
    return qString;
};
