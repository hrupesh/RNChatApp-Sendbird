import { TotalUnreadMessageCountParams } from '@sendbird/chat/groupChannel';
import type { SendbirdChatSDK } from '@sendbird/uikit-utils';
type Options = {
    params?: TotalUnreadMessageCountParams;
    maxCount?: number;
};
export declare const useTotalUnreadMessageCount: (sdk: SendbirdChatSDK, options?: Options) => string;
export {};
