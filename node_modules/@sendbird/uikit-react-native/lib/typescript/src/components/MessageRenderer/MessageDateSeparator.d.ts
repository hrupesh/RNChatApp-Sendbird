import type { SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    message: SendbirdMessage;
    prevMessage?: SendbirdMessage;
};
declare const MessageDateSeparator: ({ message, prevMessage }: Props) => JSX.Element | null;
export default MessageDateSeparator;
