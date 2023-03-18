import React from 'react';
import type { SendbirdBaseChannel, SendbirdBaseMessage } from '@sendbird/uikit-utils';
type State = {
    message?: SendbirdBaseMessage;
    channel?: SendbirdBaseChannel;
};
export type ReactionContextType = {
    openReactionList(param: Required<State>): void;
    openReactionUserList(param: Required<State> & {
        focusIndex?: number;
    }): void;
    updateReactionFocusedItem(param?: State): void;
    focusIndex: number;
} & State;
type Props = React.PropsWithChildren<{}>;
export declare const ReactionContext: React.Context<ReactionContextType | null>;
export declare const ReactionProvider: ({ children }: Props) => JSX.Element;
export {};
