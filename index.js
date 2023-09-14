'use strict'

/**
 * Module dependencies.
 */
const fs = require('fs')
const path = require('path')
const resolveGlobal = require('resolve-global')

/**
 * Resolves and returns the version of a module, first checking locally, then globally.
 * @param {string} module - The module to resolve.
 * @returns {string|undefined} The version of the module, or `undefined` if not found.
 */
module.exports = function (_module) {
    return local(_module, { silent: true }) || global(_module, { silent: true })
}

/**
 * Resolves and returns the local version of a module.
 * @param {string} module - The module to resolve locally.
 * @param {Object} [options={}] - Options.
 * @param {boolean} [options.silent=true] - Returns `undefined` instead of throwing if the module is not found locally.
 * @returns {string|undefined} The local version of the module, or `undefined` if not found locally.
 */
function local(_module, options = {}) {
    try {
        const localModulePath = require.resolve(path.join(_module, 'package.json'))

        return readPkgVersion(localModulePath)
    } catch (err) {
        if (!options.silent) throw err
    }
}

/**
 * Resolves and returns the global version of a module.
 * @param {string} module - The module to resolve globally.
 * @param {Object} [options={}] - Options.
 * @param {boolean} [options.silent=true] - If true, errors will not be thrown if the module is not found globally.
 * @returns {string|undefined} The global version of the module, or `undefined` if not found globally.
 */
function global(_module, options = {}) {
    try {
        const globalModulePath = resolveGlobal(path.join(_module, 'package.json'))

        return readPkgVersion(globalModulePath)
    } catch (err) {
        if (!options.silent) throw err
    }
}

/**
 * Read the version from a `package.json` file.
 * @param {string} pkgPath - The path to the `package.json` file.
 * @returns {string} The version from the `package.json` file.
 * @private
 */
function readPkgVersion(pkgPath) {
    return JSON.parse(fs.readFileSync(pkgPath, 'utf-8')).version
}

module.exports.local = local
module.exports.global = global