import { SendbirdChatSDK } from '@sendbird/uikit-utils';
export declare const useAppFeatures: (sdk: SendbirdChatSDK) => {
    deliveryReceiptEnabled: boolean;
    broadcastChannelEnabled: boolean;
    superGroupChannelEnabled: boolean;
    reactionEnabled: boolean;
};
