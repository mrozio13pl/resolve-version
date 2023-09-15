# resolve-version

> Resolve version of an installed module.

## Install

```bash
$ npm i resolve-version
```

## Usage

```js
const resolveVersion = require('resolve-version');

resolveVersion('yarn'); // <= '1.22.19'
```

## API

### resolveVersion (module)

Resolves and returns the version of a module, first checking locally, then globally.<br>
Returns `undefined` if fails.

### resolveVersion.local (module, options?)

Resolves and returns the local version of a module.

### resolveVersion.global (module, options?)

Resolves and returns the global version of a module.

#### module

Type: `string`<br>
Module you want to get version of.

#### options

Type: `object`

##### silent

Type: `boolean`<br>
Default: `false`

Returns `undefined` instead of throwing error if the module was not found.

## License

MIT