#!/usr/bin/env node

/**
 * Run report.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const apeReporting = require('ape-reporting')

apeTasking.runTasks('report', [
  (callback) => {
    apeReporting.sendToCodeclimate('coverage/lcov.info', callback)
  }
], true)
