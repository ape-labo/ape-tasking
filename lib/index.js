/**
 * ape framework module for tasks
 * @module ape-tasking
 */

'use strict'


const execcli = require('./execcli')
const runTasks = require('./run_tasks')

exports.execcli = execcli
exports.runTasks = runTasks

module.exports = {
  execcli,
  runTasks
}
