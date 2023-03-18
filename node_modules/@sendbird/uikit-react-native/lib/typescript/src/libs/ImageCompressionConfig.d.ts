export interface ImageCompressionConfigInterface {
    compressionRate: number;
    width?: number;
    height?: number;
}
declare class ImageCompressionConfig {
    private _config;
    static DEFAULT: {
        COMPRESSION_RATE: number;
    };
    constructor(_config: ImageCompressionConfigInterface);
    get compressionRate(): number;
    get width(): number | undefined;
    get height(): number | undefined;
}
export default ImageCompressionConfig;
