#!/usr/bin/env node

/**
 * This is an example to run tasks.
 */

"use strict";

var apeTasking = require('ape-tasking');

apeTasking.runTasks([
    function (callback) {
        /*...*/
        callback(null); //Pass error if failed.
    }
], {
    taskName: 'myCustomTask'
}, function (err) {
    /*...*/
});
