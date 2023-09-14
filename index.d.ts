declare namespace resolveVersion {
    /**
     * Options.
     */
    type Options = {
        /**
         * Returns `undefined` instead of throwing if the module was not found.
         * @default false
         */
        silent?: boolean
    }
}

declare const resolveVersion: {
    /**
     * Resolves and returns the version of a module, first checking locally, then globally.
     * 
     * @param {string} module - The module to resolve.
     * @returns {string|undefined} The version of the module, or `undefined` if not found.
     * 
     * @example ```js
     * const resolveVersion = require('resolve-version');
     * 
     * resolveVersion('yarn'); // <= '1.22.19'
     * ```
     */
    (module: string): string | undefined

    /**
     * Resolves and returns the local version of a module.
     * 
     * @param {string} module - The module to resolve locally.
     * @param {resolveVersion.Options} [options={}] - Options.
     * @returns {string|undefined} The local version of the module, or `undefined` if not found locally.
     * 
     * @example ```js
     * const resolveVersion = require('resolve-version');
     * 
     * resolveVersion.local('some-local-module'); // <= 'x.x.x'
     * ```
     */
    local(module: string, options?: resolveVersion.Options): string | undefined

    /**
     * Resolves and returns the global version of a module.
     * 
     * @param {string} module - The module to resolve globally.
     * @param {Object} [options={}] - Options.
     * @returns {string|undefined} The global version of the module, or `undefined` if not found globally.
     * 
     * @example ```js
     * const resolveVersion = require('resolve-version');
     * 
     * resolveVersion.global('yarn'); // <= '1.22.19'
     * ```
     */
    global(module: string, options?: resolveVersion.Options): string | undefined
}

export = resolveVersion