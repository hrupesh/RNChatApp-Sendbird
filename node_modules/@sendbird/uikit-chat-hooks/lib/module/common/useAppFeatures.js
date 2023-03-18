import { ApplicationAttributes, PremiumFeatures } from '@sendbird/uikit-utils';
export const useAppFeatures = sdk => {
  const {
    premiumFeatureList = [],
    applicationAttributes = []
  } = sdk.appInfo ?? {};
  return {
    deliveryReceiptEnabled: premiumFeatureList.includes(PremiumFeatures.delivery_receipt),
    broadcastChannelEnabled: applicationAttributes.includes(ApplicationAttributes.allow_broadcast_channel),
    superGroupChannelEnabled: applicationAttributes.includes(ApplicationAttributes.allow_super_group_channel),
    reactionEnabled: applicationAttributes.includes(ApplicationAttributes.reactions)
  };
};
//# sourceMappingURL=useAppFeatures.js.map