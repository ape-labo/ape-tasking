#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('../lib')
const ababel = require('ababel')

runTasks('shim', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/node'
  })
], true)
