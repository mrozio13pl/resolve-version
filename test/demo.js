const moduleVersion = require('..')

console.log(moduleVersion.local('uvu', { silent: true }))
console.log(moduleVersion.global('yarn'))
console.log(moduleVersion('yarn'))