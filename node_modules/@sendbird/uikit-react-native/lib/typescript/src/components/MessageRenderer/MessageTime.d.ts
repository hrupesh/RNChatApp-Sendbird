import { StyleProp, ViewStyle } from 'react-native';
import type { SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    message: SendbirdMessage;
    grouping: boolean;
    style?: StyleProp<ViewStyle>;
};
declare const MessageTime: ({ message, grouping, style }: Props) => JSX.Element | null;
export default MessageTime;
