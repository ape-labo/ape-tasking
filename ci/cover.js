#!/usr/bin/env node

/**
 * Run coverage
 */

"use strict";

var path = require('path'),
    apTasking = require('../lib'),
    apeCovering = require('ap-covering');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apTasking.runTasks('cover', [
    function (callback) {
        apeCovering.measureCoverage(
            require.resolve('./test.js'), [], {
                dir: 'coverage'
            }, callback
        );
    }
], true);