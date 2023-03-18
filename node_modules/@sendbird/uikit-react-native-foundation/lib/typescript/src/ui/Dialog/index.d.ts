import React from 'react';
import type { ActionMenuItem } from '../ActionMenu';
import type { AlertItem } from '../Alert';
import type { BottomSheetItem } from '../BottomSheet';
import type { PromptItem } from '../Prompt';
type DialogJob = {
    type: 'ActionMenu';
    props: ActionMenuItem;
} | {
    type: 'Alert';
    props: AlertItem;
} | {
    type: 'Prompt';
    props: PromptItem;
} | {
    type: 'BottomSheet';
    props: BottomSheetItem;
};
type DialogPropsBy<T extends DialogJob['type'], U extends DialogJob = DialogJob> = U extends {
    type: T;
    props: infer P;
} ? P : never;
type DialogContextType = {
    openMenu: (props: DialogPropsBy<'ActionMenu'>) => void;
    alert: (props: DialogPropsBy<'Alert'>) => void;
    openPrompt: (props: DialogPropsBy<'Prompt'>) => void;
    openSheet: (props: DialogPropsBy<'BottomSheet'>) => void;
};
type Props = React.PropsWithChildren<{
    defaultLabels?: {
        alert?: {
            ok?: string;
        };
        prompt?: {
            placeholder?: string;
            ok?: string;
            cancel?: string;
        };
    };
}>;
export declare const DialogProvider: ({ defaultLabels, children }: Props) => JSX.Element;
export declare const useActionMenu: () => Pick<DialogContextType, "openMenu">;
export declare const useAlert: () => Pick<DialogContextType, "alert">;
export declare const usePrompt: () => Pick<DialogContextType, "openPrompt">;
export declare const useBottomSheet: () => Pick<DialogContextType, "openSheet">;
export {};
