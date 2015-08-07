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

var argx = require('argx'),
    async = require('async'),
    stringcase = require('stringcase'),
    colorprint = require('colorprint');

/** @lends runTasks */
function runTasks(name, actions, exit, callback) {
    var args = argx(arguments);
    name = args.shift('string') || 'task';
    actions = [].concat(args.shift('array|function') || []);
    callback = args.pop('function') || argx.noop;
    exit = args.pop('boolean') || false;

    var startAt = new Date();
    colorprint.notice('%s started...', stringcase.capitalcase(name));
    async.series(actions, function (err) {
        if (err) {
            colorprint.fatal('...%s failed.', name);
            colorprint.error(err.stack || err.msg || String(err));
        } else {
            var took = new Date() - startAt;
            colorprint.notice('...%s done!(%dms)', name, took)
        }
        callback(err);
        if (exit) {
            runTasks.exit(err ? 1 : 0);
        }
    });
}

runTasks.exit = function (code) {
    process.nextTick(function () {
        process.exit(code);
    });
};


module.exports = runTasks;