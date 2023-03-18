import type * as RNCNetInfo from '@react-native-community/netinfo';
export type SBUNativeModule = keyof DynamicModules;
interface SBUDynamicModuleInfo {
    packageName: SBUNativeModule;
    nativeModuleNamespace: string;
    getPackage: <T>(logLevel: 'error' | 'warn' | 'none') => T;
    url: string;
    isComponent?: boolean;
}
export interface DynamicModules {
    '@react-native-community/netinfo': typeof RNCNetInfo;
}
declare const SBUDynamicModule: {
    register(mdi: SBUDynamicModuleInfo): void;
    getInfo(name: SBUNativeModule): SBUDynamicModuleInfo;
    get<K extends "@react-native-community/netinfo", T extends DynamicModules[K]>(name: K, logLevel?: 'error' | 'warn' | 'none'): T;
};
export default SBUDynamicModule;
