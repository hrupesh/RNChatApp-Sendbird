import type { OGMetaData } from '@sendbird/chat/message';
import type { UserMessageProps } from './index';
type Props = UserMessageProps & {
    ogMetaData: OGMetaData;
};
declare const OpenGraphUserMessage: ({ message, variant, pressed, ogMetaData, children, onLongPressMentionedUser, onLongPressURL, }: Props) => JSX.Element;
export default OpenGraphUserMessage;
