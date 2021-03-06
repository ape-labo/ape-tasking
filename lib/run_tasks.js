/**
 * Run tasks.
 * @memberof ape-tasking/lib
 * @function runTasks
 * @param {string} [name='task'] - Name of task.
 * @param {function[]} actions - Tasks functions.
 * @param {boolean} [exit=false] - Exit process when done.
 * @returns {Promise}
 */

'use strict'

const argx = require('argx')
const os = require('os')
const { capitalcase } = require('stringcase')
const colorprint = require('colorprint')

/** @lends runTasks */
async function runTasks(name, actions, exit) {
  let args = argx(arguments)
  name = args.shift('string') || 'task'
  actions = [].concat(args.shift('array|function') || [])
  exit = args.pop('boolean') || false

  process.on('uncaughtException', (e) => {
    if (!runTasks.uncaughtException) {
      console.error(e)
    }
    runTasks.uncaughtException = e
  })

  async function run() {
    let startAt = new Date()
    colorprint.notice('%s started...', capitalcase(name))
    try {
      for (const action of actions) {
        await new Promise((resolve, reject) => {
          let callback = (err) => err ? reject(err) : resolve()
          let promise = action(callback)
          if (promise) {
            promise.then(resolve, reject)
          }
        })
      }
      let took = new Date() - startAt
      colorprint.notice('...%s done!(%dms)' + os.EOL, name, took)
      if (exit) {
        runTasks.exit(0)
      }
    } catch (err) {
      colorprint.fatal('...%s failed.', name)
      colorprint.error(err.stack || err.msg || String(err))
      if (exit) {
        runTasks.exit(1)
      }
      return Promise.reject(err)
    }
  }

  let runner = { name, run }
  runTasks.rerun = run
  return run().then(() => runner)
}

Object.assign(runTasks, {
  rerun() {
    console.log('nothing to run')
  },
  exit(code) {
    process.nextTick(() => {
      process.exit(code)
    })
  }
})

module.exports = runTasks
