/**
 * Test case for runTasks.
 * Runs with mocha.
 */
'use strict'

const runTasks = require('../lib/run_tasks.js')
const injectmock = require('injectmock')
const assert = require('assert')

describe('run-tasks', () => {
  before((done) => {
    done()
  })

  after((done) => {
    injectmock.restoreAll()
    done()
  })

  it('Run tasks', (done) => {
    runTasks('Test task', [], false).then(() => {
      runTasks.rerun().then(() => {
        done()
      })
    })
  })

  it('Run tasks with error', (done) => {
    injectmock(console, 'error', injectmock.noop)
    runTasks('Test task to fail', [
      function (callback) {
        callback(new Error('something wrong!'))
      }
    ], false)
      .then(() => {
        done()
      })
      .catch((err) => {
        assert.ok(!!err)
        done()
      })
  })
})

/* global describe, before, after, it */
