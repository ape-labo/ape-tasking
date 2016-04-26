#!/usr/bin/env node

"use strict";

const apeTasking = require('ape-tasking');

// Run tasks
apeTasking.runTasks('myCustomTask', [
  // Run callback base task
  (callback) => {
    /* ... */
    callback(null) //Pass error if failed.
  },
  // Run promise base task
  () => new Promise((resolve, reject) => {
    /* ... */
    resolve()
  })
], true);
