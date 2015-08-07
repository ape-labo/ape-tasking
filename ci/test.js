#!/usr/bin/env node

"use strict";

var path = require('path'),
    apeTesting = require('ape-testing'),
    apTasking = require('../lib');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apTasking.runTasks('test', [
    function (callback) {
        apeTesting.runNodeunit('test/*_test.js', callback);
    }
], true);