import { expectType } from 'tsd'
import resolveVersion from '.'

expectType<string | undefined>(resolveVersion('resolve-global'))
expectType<string | undefined>(resolveVersion.local('resolve-global'))
expectType<string | undefined>(resolveVersion.global('yarn'))