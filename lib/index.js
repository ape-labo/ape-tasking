/**
 * ape framework module for tasks
 * @module ape-tasking
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get execcli () { return d(require('./execcli')) },
  get runTasks () { return d(require('./run_tasks')) }
}
