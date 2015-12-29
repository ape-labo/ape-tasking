/**
 * Test case for execcli.
 * Runs with mocha.
 */
"use strict";

const execcli = require('../lib/execcli.js'),
    assert = require('assert');

describe('execcli', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Execcli', (done) => {
        execcli('ls', ['.'], (err) => {
            assert.ifError(err);
            done();
        });
    });
});

