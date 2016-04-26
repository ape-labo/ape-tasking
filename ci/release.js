#!/usr/bin/env node

/**
 * Release this package.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('../lib')
const apeReleasing = require('ape-releasing')

apeTasking.runTasks('release', [
  (callback) => {
    apeReleasing.releasePackage({
      beforeRelease: [
        './ci/build.js',
        './ci/test.js'
      ]
    }, callback)
  }
], true)
