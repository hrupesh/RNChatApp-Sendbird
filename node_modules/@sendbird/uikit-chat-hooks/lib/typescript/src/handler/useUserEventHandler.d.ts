import { UserEventHandler } from '@sendbird/chat';
import type { SendbirdChatSDK } from '@sendbird/uikit-utils';
export declare const useUserEventHandler: (sdk: SendbirdChatSDK, handlerId: string, hookHandler: Partial<UserEventHandler>) => void;
