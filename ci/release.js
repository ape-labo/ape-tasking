#!/usr/bin/env node


/**
 * Release this package.
 */

"use strict";

var path = require('path'),
    apTasking = require('../lib'),
    apeReleasing = require('ape-releasing');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);


apTasking.runTasks('release', [
    function (callback) {
        apeReleasing.releasePackage({}, callback);
    }
], true);