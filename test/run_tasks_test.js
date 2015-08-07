/**
 * Test case for runTasks.
 * Runs with nodeunit.
 */

var runTasks = require('../lib/run_tasks.js'),
    injectmock = require('injectmock');

exports.tearDown = function (done) {
    injectmock.restoreAll();
    done();
};

exports['Run tasks'] = function (test) {
    runTasks('Test task', [], false, function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Run tasks with error'] = function (test) {
    injectmock(console, 'error', injectmock.noop);
    runTasks('Test task to fail', [
        function (callback) {
            callback(new Error('something wrong!'));
        }
    ], false, function (err) {
        test.ok(!!err);
        test.done();
    });
};

