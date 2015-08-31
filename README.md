ape-tasking
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/ape-repo/ape-tasking
[bd_travis_url]: http://travis-ci.org/ape-repo/ape-tasking
[bd_travis_shield_url]: http://img.shields.io/travis/ape-repo/ape-tasking.svg?style=flat
[bd_license_url]: https://github.com/ape-repo/ape-tasking/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-tasking
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-tasking.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-tasking.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/ape-repo/ape-tasking
[bd_gemnasium_shield_url]: https://gemnasium.com/ape-repo/ape-tasking.svg
[bd_npm_url]: http://www.npmjs.org/package/ape-tasking
[bd_npm_shield_url]: http://img.shields.io/npm/v/ape-tasking.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

ape framework module for managins tasks

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
----

### Run Tasks

`.runTasks(taskName, tasks, exitWhenDone)`

```javascript
#!/usr/bin/env node

var apeTasking = require('ape-tasking');

// Run tasks
apeTasking.runTasks('myCustomTask', [
    function (callback) {
        /*...*/
        callback(null); //Pass error if failed.
    }
], true);

```
<!-- Section from "docs/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/ape-repo/ape-tasking/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ape-repo](https://github.com/ape-repo)

<!-- Links End -->
