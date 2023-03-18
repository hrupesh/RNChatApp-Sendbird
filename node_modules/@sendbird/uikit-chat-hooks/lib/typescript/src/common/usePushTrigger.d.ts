import { PushTriggerOption } from '@sendbird/chat';
import type { SendbirdChatSDK } from '@sendbird/uikit-utils';
declare const PushTriggerMap: {
    all: PushTriggerOption;
    mention_only: PushTriggerOption;
    off: PushTriggerOption;
    default: PushTriggerOption;
};
export declare const usePushTrigger: (sdk: SendbirdChatSDK) => {
    option: PushTriggerOption;
    updateOption: (value: keyof typeof PushTriggerMap) => Promise<void>;
};
export {};
