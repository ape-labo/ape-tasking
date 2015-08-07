#!/usr/bin/env node

"use strict";

var path = require('path'),
    apeTesting = require('ape-testing'),
    apeTasking = require('../lib');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apeTasking.runTasks('test', [
    function (callback) {
        apeTesting.runNodeunit('test/*_test.js', callback);
    }
], true);