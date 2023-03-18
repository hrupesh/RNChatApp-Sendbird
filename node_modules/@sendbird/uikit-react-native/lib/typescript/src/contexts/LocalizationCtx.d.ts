import React from 'react';
import type { StringSet } from '../localization/StringSet.type';
type Props = React.PropsWithChildren<{
    stringSet: StringSet;
}>;
export type LocalizationContextType = {
    STRINGS: StringSet;
};
export declare const LocalizationContext: React.Context<LocalizationContextType | null>;
export declare const LocalizationProvider: ({ children, stringSet }: Props) => JSX.Element;
export {};
