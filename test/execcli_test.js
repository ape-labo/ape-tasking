/**
 * Test case for execcli.
 * Runs with mocha.
 */
"use strict";

const execcli = require('../lib/execcli.js');
const assert = require('assert');

describe('execcli', () => {
  it('Execcli', (done) => {
    execcli('ls', [ '.' ], (err) => {
      assert.ifError(err)
      done()
    })
  })
})

/* global describe, it */
