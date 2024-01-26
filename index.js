"use strict";
const fs = require('fs');

var UAs = fs.readFileSync('user-agent.txt', 'utf-8').split('\n');
var N = UAs.length;

module.exports = function() {
    var randomIndex = Math.floor(Math.random() * N);
    return UAs[randomIndex];
}