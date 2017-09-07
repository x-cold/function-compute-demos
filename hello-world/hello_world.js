'use strict';
module.exports.handler = function(event, context, callback) {
    console.log('hello world');
    callback(null, 'hello world');
};
