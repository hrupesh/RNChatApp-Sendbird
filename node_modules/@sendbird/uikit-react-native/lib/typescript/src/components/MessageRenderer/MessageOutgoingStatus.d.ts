import React from 'react';
import type { SendbirdGroupChannel, SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    channel: SendbirdGroupChannel;
    message: SendbirdMessage;
};
declare const _default: React.MemoExoticComponent<({ channel, message }: Props) => JSX.Element | null>;
export default _default;
