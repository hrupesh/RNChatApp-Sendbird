import { AppStateEvent, AppStateStatus } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
type EdgePaddingMap = {
    left: 'paddingLeft';
    right: 'paddingRight';
    top: 'paddingTop';
    bottom: 'paddingBottom';
};
export declare const useSafeAreaPadding: <T extends keyof EdgeInsets, Result extends { [key in EdgePaddingMap[T]]: EdgeInsets[T]; }>(edges: T[]) => Result;
type AppStateListener = (status: AppStateStatus) => void;
export declare const useAppState: (type: AppStateEvent, listener: AppStateListener) => void;
export {};
