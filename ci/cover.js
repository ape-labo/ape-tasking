#!/usr/bin/env node

/**
 * Measure test coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const { coverage } = require('amocha')

apeTasking.runTasks('cover', [
  () => coverage('test/*_test.js', {
    dir: 'coverage'
  })
], true)

