import React from 'react';
import type { HeaderProps } from '../ui/Header';
export type HeaderStyleContextType = {
    HeaderComponent: (props: HeaderProps) => React.ReactElement | null;
    defaultTitleAlign: 'left' | 'center';
    statusBarTranslucent: boolean;
    topInset: number;
    defaultHeight: number;
};
export declare const HeaderStyleContext: React.Context<HeaderStyleContextType>;
type Props = Pick<HeaderStyleContextType, 'statusBarTranslucent' | 'defaultTitleAlign' | 'HeaderComponent'>;
export declare const HeaderStyleProvider: ({ children, HeaderComponent, defaultTitleAlign, statusBarTranslucent, }: React.PropsWithChildren<Props>) => JSX.Element;
export {};
