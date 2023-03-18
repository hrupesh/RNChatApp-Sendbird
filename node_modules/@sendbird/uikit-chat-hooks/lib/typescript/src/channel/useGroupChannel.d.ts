import { SendbirdChatSDK } from '@sendbird/uikit-utils';
export declare const useGroupChannel: (sdk: SendbirdChatSDK, channelUrl: string) => {
    channel: import("@sendbird/chat/groupChannel").GroupChannel | undefined;
    loading: boolean;
    error: unknown;
};
