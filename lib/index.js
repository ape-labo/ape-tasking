/**
 * ape framework module for tasks
 * @module ape-tasking
 */

"use strict";

module.exports = {
    get execcli() { return require('./execcli'); },
    get runTasks() { return require('./run_tasks'); }
};