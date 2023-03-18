declare const LogLevelEnum: {
    none: number;
    log: number;
    error: number;
    warn: number;
    info: number;
    debug: number;
};
type LogLevel = keyof typeof LogLevelEnum;
export declare const Logger: {
    LogLevelEnum: {
        none: number;
        log: number;
        error: number;
        warn: number;
        info: number;
        debug: number;
    };
    create: (level?: LogLevel) => {
        setTitle(title: string): void;
        setLogLevel(lv: LogLevel): void;
        getLogLevel(): "none" | "log" | "error" | "warn" | "info" | "debug";
        log(...args: unknown[]): number;
        error(...args: unknown[]): number;
        warn(...args: unknown[]): number;
        info(...args: unknown[]): number;
        debug(...args: unknown[]): number;
    };
    setTitle(title: string): void;
    setLogLevel(lv: LogLevel): void;
    getLogLevel(): "none" | "log" | "error" | "warn" | "info" | "debug";
    log(...args: unknown[]): number;
    error(...args: unknown[]): number;
    warn(...args: unknown[]): number;
    info(...args: unknown[]): number;
    debug(...args: unknown[]): number;
};
export {};
