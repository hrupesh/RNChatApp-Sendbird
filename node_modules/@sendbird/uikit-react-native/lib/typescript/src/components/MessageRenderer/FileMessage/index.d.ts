import React from 'react';
import { SendbirdFileMessage } from '@sendbird/uikit-utils';
import type { MessageRendererInterface } from '../index';
export type FileMessageProps = MessageRendererInterface<SendbirdFileMessage>;
declare const _default: React.MemoExoticComponent<(props: {
    message: import("@sendbird/chat/message").FileMessage;
    prevMessage?: import("@sendbird/uikit-utils").SendbirdMessage | undefined;
    nextMessage?: import("@sendbird/uikit-utils").SendbirdMessage | undefined;
    variant: "incoming" | "outgoing";
    groupWithPrev: boolean;
    groupWithNext: boolean;
    pressed: boolean;
    children?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined;
}) => JSX.Element>;
export default _default;
