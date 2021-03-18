const shelljs = require('shelljs');

const result = shelljs.exec('git diff --name-only main..main', { silent: true });

console.log(result.stdout.split('\n').filter((data) => Boolean(data)));
