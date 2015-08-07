#!/usr/bin/env node

/**
 * Run report.
 */

"use strict";

var path = require('path'),
    apeTasking = require('../lib'),
    apeReporting = require('ape-reporting');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apeTasking.runTasks('report', [
    function (callback) {
        apeReporting.sendToCodeclimate(basedir + '/coverage/lcov.info', callback);
    }
], true);
