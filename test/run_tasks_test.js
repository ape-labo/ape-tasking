/**
 * Test case for runTasks.
 * Runs with mocha.
 */
"use strict";

const runTasks = require('../lib/run_tasks.js'),
    injectmock = require('injectmock'),
    assert = require('assert');

describe('run-tasks', () => {

    before((done) => {
        done();
    });

    after((done) => {
        injectmock.restoreAll();
        done();
    });


    it('Run tasks', (done) => {
        runTasks('Test task', [], false, function (err) {
            assert.ifError(err);
            done();
        });
    });

    it('Run tasks with error', (done) => {
        injectmock(console, 'error', injectmock.noop);
        runTasks('Test task to fail', [
            function (callback) {
                callback(new Error('something wrong!'));
            }
        ], false, function (err) {
            assert.ok(!!err);
            done();
        });
    });
});

