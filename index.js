"use strict";
const fs = require('fs');

var UAs = fs.readFileSync('user-agent.txt', 'utf-8').split('\n');
var N = UAs.length;
var current = -1;

module.exports = function() {
    current++;
    if (current >= N) {
        current = 0;
    }
    return UAs[current];
}