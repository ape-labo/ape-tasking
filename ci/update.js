#!/usr/bin/env node

/**
 * Update project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const apeUpdating = require('ape-updating')

apeTasking.runTasks('update', [
  () => apeUpdating.updateDependencies({})
], true)
