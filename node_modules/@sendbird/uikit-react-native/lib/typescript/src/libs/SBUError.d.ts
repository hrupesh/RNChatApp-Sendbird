declare enum SBUErrorCode {
    ERR_UNKNOWN = 90000000,
    ERR_PERMISSIONS_DENIED = 91001000,
    ERR_DEVICE_UNAVAILABLE = 91001001
}
export default class SBUError extends Error {
    code: SBUErrorCode;
    static CODE: typeof SBUErrorCode;
    static get UNKNOWN(): SBUError;
    static get PERMISSIONS_DENIED(): SBUError;
    static get DEVICE_UNAVAILABLE(): SBUError;
    constructor(code: SBUErrorCode, message?: string);
}
export {};
