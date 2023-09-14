const { test } = require('uvu')
const { type } = require('uvu/assert')

const resolveVersion = require('..')

test('resolves version', () => {
    type(resolveVersion('resolve-global'), 'string')
    type(resolveVersion.local('resolve-global'), 'string')
    type(resolveVersion.local('some-non-existing-module', { silent: true }), 'undefined')

    // assuming you have yarn installed globally
    // if not run `npm i -g yarn`
    type(resolveVersion.global('yarn'), 'string')
})

test.run()