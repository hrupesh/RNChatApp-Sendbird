declare const createScaleFactor: {
    (deviceWidth?: number): (dp: number) => number;
    updateScaleFactor(scaleFactor: (dp: number) => number): void;
};
export declare let DEFAULT_SCALE_FACTOR: (dp: number) => number;
export default createScaleFactor;
