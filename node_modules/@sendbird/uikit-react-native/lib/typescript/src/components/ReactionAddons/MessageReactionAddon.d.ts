import type { SendbirdBaseChannel, SendbirdBaseMessage } from '@sendbird/uikit-utils';
declare const MessageReactionAddon: ({ channel, message }: {
    channel: SendbirdBaseChannel;
    message: SendbirdBaseMessage;
}) => JSX.Element | null;
export default MessageReactionAddon;
