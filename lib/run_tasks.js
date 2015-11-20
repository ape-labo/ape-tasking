/**
 * Run tasks.
 * @memberof ape-tasking/lib
 * @function runTasks
 * @param {string} [name='task'] - Name of task.
 * @param {function[]} actions - Tasks functions.
 * @param {boolean} [exit=false] - Exit process when done.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

const argx = require('argx'),
    async = require('async'),
    os = require('os'),
    stringcase = require('stringcase'),
    colorprint = require('colorprint');

/** @lends runTasks */
function runTasks(name, actions, exit, callback) {
    let args = argx(arguments);
    name = args.shift('string') || 'task';
    actions = [].concat(args.shift('array|function') || []);
    callback = args.pop('function') || argx.noop;
    exit = args.pop('boolean') || false;

    let startAt = new Date();
    colorprint.notice('%s started...', stringcase.capitalcase(name));
    async.series(actions, (err) => {
        if (err) {
            colorprint.fatal('...%s failed.', name);
            colorprint.error(err.stack || err.msg || String(err));
        } else {
            let took = new Date() - startAt;
            colorprint.notice('...%s done!(%dms)' + os.EOL, name, took)
        }
        callback(err);
        if (exit) {
            runTasks.exit(err ? 1 : 0);
        }
    });

    process.on('uncaughtException', (e) => {
        if (!runTasks.uncaughtException) {
            console.error(e);
        }
        runTasks.uncaughtException = e;
    });
}

runTasks.exit = function (code) {
    process.nextTick(() => {
        process.exit(code);
    });
};


module.exports = runTasks;