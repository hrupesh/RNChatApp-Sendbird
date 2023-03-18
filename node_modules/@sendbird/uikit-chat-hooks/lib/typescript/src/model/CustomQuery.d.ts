import type { CustomQueryInterface } from '../types';
type ConstructorParams<T> = {
    next: () => Promise<T[]>;
    isLoading: () => boolean;
    hasNext: () => boolean;
};
export declare class CustomQuery<T> implements CustomQueryInterface<T> {
    private params;
    constructor(params: ConstructorParams<T>);
    get isLoading(): boolean;
    get hasNext(): boolean;
    next(): Promise<T[]>;
}
export {};
