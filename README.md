ape-tasking
==========

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]

Tasking module of ape framework.


Usage
----

### Measure coverage.

```javascript
#!/usr/bin/env node

/**
 * This is an example to run tasks.
 */

"use strict";

var apeTasking = require('ape-tasking');

apeTasking.runTasks([
    function (callback) {
        /*...*/
        callback(null); //Pass error if failed.
    }
], {
    taskName: 'myCustomTask'
}, function (err) {
    /*...*/
});

```


Installation
----

```javascript
$ npm install ape-tasking --save
```


License
-------
This software is released under the [MIT License][my_license_url].


Links
------



[npm_url]: https://www.npmjs.org/
[my_repo_url]: https://github.com/ape-repo/ape-tasking
[my_travis_url]: http://travis-ci.org/ape-repo/ape-tasking
[my_travis_badge_url]: http://img.shields.io/travis/ape-repo/ape-tasking.svg?style=flat
[my_license_url]: https://github.com/ape-repo/ape-tasking/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-tasking
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-tasking.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-tasking.svg?style=flat
[my_coverage_url]: http://ape-repo.github.io/ape-tasking/coverage/lcov-report
[my_npm_url]: http://www.npmjs.org/package/ape-tasking
[my_npm_budge_url]: http://img.shields.io/npm/v/ape-tasking.svg?style=flat

