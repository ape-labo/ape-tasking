#!/usr/bin/env node

var path = require('path'),
    apTasking = require('../lib'),
    coz = require('coz');

var basedir = path.resolve(__dirname, '..');
process.chdir(basedir);

apTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    }
], true);

