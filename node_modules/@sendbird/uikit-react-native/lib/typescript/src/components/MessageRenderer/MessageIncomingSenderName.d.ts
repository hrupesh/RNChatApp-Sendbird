import type { SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    message: SendbirdMessage;
    grouping: boolean;
};
declare const MessageIncomingSenderName: ({ message, grouping }: Props) => JSX.Element | null;
export default MessageIncomingSenderName;
