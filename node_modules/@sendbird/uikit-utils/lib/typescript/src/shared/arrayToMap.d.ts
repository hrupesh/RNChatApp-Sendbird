import type { FilterByValueType } from '../types';
export default function arrayToMap<T extends Record<K, unknown>, K extends keyof T = keyof T>(arr: T[], selector: keyof FilterByValueType<T, string | number>): Record<string, T>;
export default function arrayToMap<T extends Record<K, unknown>, K extends keyof T = keyof T>(arr: T[], selector: string, fallbackSelector: K): Record<string, T>;
export default function arrayToMap<T extends Record<K, unknown>, K extends keyof T = keyof T>(arr: T[], selector: string, selector2: string, combineKey: true): Record<string, T>;
export declare function arrayToMapWithGetter<T>(arr: T[], getSelector: (item: T) => string): Record<string, T>;
