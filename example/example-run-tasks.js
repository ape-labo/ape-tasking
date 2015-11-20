#!/usr/bin/env node

"use strict";

const apeTasking = require('ape-tasking');

// Run tasks
apeTasking.runTasks('myCustomTask', [
    (callback) => {
        /*...*/
        callback(null); //Pass error if failed.
    }
], true);
