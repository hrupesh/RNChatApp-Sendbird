import type React from 'react';
import type { LocalizationContext } from '../../contexts/LocalizationCtx';
import type { ReactionContext } from '../../contexts/ReactionCtx';
import type { SendbirdChatContext } from '../../contexts/SendbirdChatCtx';
import type { UserProfileContext } from '../../contexts/UserProfileCtx';
type GetFromContext<T> = T extends React.Context<infer Value> ? NonNullable<Value> : never;
export type ReactionBottomSheetProps = {
    visible: boolean;
    onDismiss: () => void;
    onClose: () => Promise<void>;
    chatCtx: GetFromContext<typeof SendbirdChatContext>;
    reactionCtx: GetFromContext<typeof ReactionContext>;
    localizationCtx: GetFromContext<typeof LocalizationContext>;
    userProfileCtx: GetFromContext<typeof UserProfileContext>;
};
export declare const ReactionBottomSheets: {
    ReactionList: ({ visible, onClose, onDismiss, reactionCtx, chatCtx }: ReactionBottomSheetProps) => JSX.Element;
    UserList: ({ visible, onClose, onDismiss, reactionCtx, chatCtx, localizationCtx, userProfileCtx, }: ReactionBottomSheetProps) => JSX.Element;
};
export {};
