#!/usr/bin/env node

/**
 * Run tests.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const apeTesting = require('ape-testing')

apeTasking.runTasks('test', [
  (callback) => {
    apeTesting.runMocha('test/*_test.js', callback)
  }
], true)
