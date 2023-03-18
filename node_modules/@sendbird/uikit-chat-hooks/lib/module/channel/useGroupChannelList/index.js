import { Logger } from '@sendbird/uikit-utils';
import { useGroupChannelListWithCollection } from './useGroupChannelListWithCollection';
import { useGroupChannelListWithQuery } from './useGroupChannelListWithQuery';
export const useGroupChannelList = (sdk, userId, options) => {
  if (sdk.isCacheEnabled || options !== null && options !== void 0 && options.enableCollectionWithoutLocalCache) {
    if (options !== null && options !== void 0 && options.queryCreator) Logger.warn('`queryCreator` is ignored, please use `collectionCreator` instead.');
    return useGroupChannelListWithCollection(sdk, userId, options);
  } else {
    return useGroupChannelListWithQuery(sdk, userId, options);
  }
};
//# sourceMappingURL=index.js.map