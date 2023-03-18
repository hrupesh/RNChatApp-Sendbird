export default class SBUUtils {
    static openSettings(): void;
    static openURL(url: string): void;
    static getImageSize(uri: string): Promise<{
        width: number;
        height: number;
    }>;
    static safeRun(callback: () => Promise<void>): Promise<void>;
}
