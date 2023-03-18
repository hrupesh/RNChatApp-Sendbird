import React from 'react';
import type { SendbirdUserMessage } from '@sendbird/uikit-utils';
import type { MessageRendererInterface } from '../index';
export type UserMessageProps = MessageRendererInterface<SendbirdUserMessage, {
    onLongPressMentionedUser?: () => void;
    onLongPressURL?: () => void;
}>;
declare const _default: React.MemoExoticComponent<(props: UserMessageProps) => JSX.Element>;
export default _default;
