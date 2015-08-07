#!/usr/bin/env node

/**
 * Run report.
 */

"use strict";

var path = require('path'),
    apTasking = require('../lib'),
    apeReporting = require('ape-reporting');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apTasking.runTasks('report', [
    function (callback) {
        apeReporting.sendToCodeclimate(basedir + '/coverage/lcov.info', callback);
    }
], true);
