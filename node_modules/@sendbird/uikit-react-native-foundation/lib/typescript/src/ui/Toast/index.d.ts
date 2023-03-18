import React from 'react';
type ToastType = 'normal' | 'error' | 'success';
type Context = {
    show(text: string, type?: ToastType): void;
};
type Props = React.PropsWithChildren<{
    top?: number;
    bottom?: number;
    visible: boolean;
    type: ToastType;
    children: string;
}>;
declare const Toast: ({ visible, type, children, top, bottom }: Props) => JSX.Element;
export declare const ToastProvider: ({ children, dismissTimeout, }: React.PropsWithChildren<{
    dismissTimeout?: number | undefined;
}>) => JSX.Element;
export declare const useToast: () => Context;
export default Toast;
