/// <reference types="react" />
import type { NativeSyntheticEvent, TextInput, TextInputSelectionChangeEventData } from 'react-native';
import { SendbirdFileMessage, SendbirdUserMessage } from '@sendbird/uikit-utils';
import type { MentionedUser } from '../types';
declare const useMentionTextInput: (params: {
    messageToEdit?: SendbirdUserMessage | SendbirdFileMessage;
}) => {
    textInputRef: import("react").MutableRefObject<TextInput | undefined>;
    selection: {
        start: number;
        end: number;
    };
    onSelectionChange: (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void;
    text: string;
    onChangeText: (_nextText: string, addedMentionedUser?: MentionedUser) => void;
    mentionedUsers: MentionedUser[];
};
export default useMentionTextInput;
