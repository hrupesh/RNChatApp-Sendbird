import { useCallback, useState } from 'react';
import { PushTriggerOption } from '@sendbird/chat';
import { Logger, useAsyncEffect } from '@sendbird/uikit-utils';
const PushTriggerMap = {
  'all': PushTriggerOption.ALL,
  'mention_only': PushTriggerOption.MENTION_ONLY,
  'off': PushTriggerOption.OFF,
  'default': PushTriggerOption.DEFAULT
};
export const usePushTrigger = sdk => {
  const [option, setOption] = useState(PushTriggerOption.DEFAULT);
  const updateOption = useCallback(async value => {
    try {
      const _option = PushTriggerMap[value];
      await sdk.setPushTriggerOption(_option).then(() => setOption(_option));
    } catch (e) {
      Logger.warn('[usePushTrigger]', 'Cannot update push trigger option', e);
    }
  }, [sdk, sdk.currentUser]);
  useAsyncEffect(async () => {
    setOption(await sdk.getPushTriggerOption());
  }, [sdk, sdk.currentUser]);
  return {
    option,
    updateOption
  };
};
//# sourceMappingURL=usePushTrigger.js.map