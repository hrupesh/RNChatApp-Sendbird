import type { SendbirdChatSDK, SendbirdGroupChannel, SendbirdMessage } from '@sendbird/uikit-utils';
export type SBUOutgoingStatus = 'NONE' | 'PENDING' | 'FAILED' | 'UNDELIVERED' | 'DELIVERED' | 'UNREAD' | 'READ';
export declare const useMessageOutgoingStatus: (sdk: SendbirdChatSDK, channel: SendbirdGroupChannel, message?: SendbirdMessage | null) => SBUOutgoingStatus;
