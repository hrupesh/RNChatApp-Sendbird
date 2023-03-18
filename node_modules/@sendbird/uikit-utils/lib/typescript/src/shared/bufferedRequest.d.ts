type Func = (...args: unknown[]) => Promise<unknown>;
export declare class BufferedRequest {
    static markAsRead: {
        push(func: Func, lane?: string): void;
        shift(): void;
        handleIdle(): void;
        handleProcessing(): void;
        invoke(): Promise<void>;
    };
    static markAsDelivered: {
        push(func: Func, lane?: string): void;
        shift(): void;
        handleIdle(): void;
        handleProcessing(): void;
        invoke(): Promise<void>;
    };
    static updateMarkAsReadOptions(reqPerTimeout: number, timeoutMills: number): void;
    static updateMarkAsDeliveredOptions(reqPerTimeout: number, timeoutMills: number): void;
    static get reqPerTimeout(): number;
    static set reqPerTimeout(value: number);
    static get timeoutMills(): number;
    static set timeoutMills(value: number);
    static create(reqPerTimeout?: number, timeoutMills?: number): {
        push(func: Func, lane?: string): void;
        shift(): void;
        handleIdle(): void;
        handleProcessing(): void;
        invoke(): Promise<void>;
    };
}
export {};
