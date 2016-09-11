#!/usr/bin/env node

/**
 * Run tests.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const amocha = require('amocha')

apeTasking.runTasks('test', [
  () => amocha('test/*_test.js')
], true)
