import type { SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    message: SendbirdMessage;
    grouping: boolean;
};
declare const MessageIncomingAvatar: ({ message, grouping }: Props) => JSX.Element;
export default MessageIncomingAvatar;
