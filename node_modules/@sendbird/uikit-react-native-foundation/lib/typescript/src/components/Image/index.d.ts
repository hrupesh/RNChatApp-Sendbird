import type { ImageProps as NativeImageProps } from 'react-native';
export interface SendbirdImageProps extends Omit<NativeImageProps, 'onLoad' | 'onError'> {
    onLoad?: (event: {
        width: number;
        height: number;
    }) => void;
    onError?: (event: {
        error?: unknown;
    }) => void;
    tintColor?: string;
}
export type SendbirdImageComponent = (props: SendbirdImageProps) => JSX.Element;
declare const _default: SendbirdImageComponent;
export default _default;
