#!/usr/bin/env node

var apeTasking = require('ape-tasking');

// Run tasks
apeTasking.runTasks('myCustomTask', [
    function (callback) {
        /*...*/
        callback(null); //Pass error if failed.
    }
], true);
