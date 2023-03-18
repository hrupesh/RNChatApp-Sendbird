import { Logger } from '@sendbird/uikit-utils';
import { useGroupChannelMessagesWithCollection } from './useGroupChannelMessagesWithCollection';
import { useGroupChannelMessagesWithQuery } from './useGroupChannelMessagesWithQuery';
export const useGroupChannelMessages = (sdk, channel, userId, options) => {
  if (sdk.isCacheEnabled || options !== null && options !== void 0 && options.enableCollectionWithoutLocalCache) {
    if (options !== null && options !== void 0 && options.queryCreator) Logger.warn('`queryCreator` is ignored, please use `collectionCreator` instead.');
    return useGroupChannelMessagesWithCollection(sdk, channel, userId, options);
  } else {
    return useGroupChannelMessagesWithQuery(sdk, channel, userId, options);
  }
};
//# sourceMappingURL=index.js.map