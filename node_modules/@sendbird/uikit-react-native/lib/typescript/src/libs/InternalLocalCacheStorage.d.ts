import type { KeyValuePairGet, KeyValuePairSet, LocalCacheStorage } from '../types';
export default class InternalLocalCacheStorage implements LocalCacheStorage {
    private storage;
    constructor(storage: LocalCacheStorage);
    getAllKeys(): Promise<readonly string[] | string[]>;
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
    multiGet(keys: string[]): Promise<readonly KeyValuePairGet[]>;
    multiRemove(keys: string[]): Promise<void>;
    multiSet(keyValuePairs: Array<KeyValuePairSet>): Promise<void>;
    clear: () => Promise<undefined>;
    flushGetRequests: () => Promise<undefined>;
}
