#!/usr/bin/env node

/**
 * Measure test coverage.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('../lib'),
    apeCovering = require('ape-covering');

apeTasking.runTasks('cover', [
    (callback) => {
        apeCovering.measureCoverage('ci/test.js', [], {
            dir: 'coverage'
        }, callback);
    }
], true);
