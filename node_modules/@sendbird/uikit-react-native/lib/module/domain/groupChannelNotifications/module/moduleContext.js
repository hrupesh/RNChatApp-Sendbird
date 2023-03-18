import React, { createContext } from 'react';
import ProviderLayout from '../../../components/ProviderLayout';
import { useLocalization } from '../../../hooks/useContext';
export const GroupChannelNotificationsContexts = {
  Fragment: /*#__PURE__*/createContext({
    headerTitle: '',
    channel: {}
  })
};
export const GroupChannelNotificationsContextsProvider = _ref => {
  let {
    children,
    channel
  } = _ref;
  const {
    STRINGS
  } = useLocalization();
  return /*#__PURE__*/React.createElement(ProviderLayout, null, /*#__PURE__*/React.createElement(GroupChannelNotificationsContexts.Fragment.Provider, {
    value: {
      channel,
      headerTitle: STRINGS.GROUP_CHANNEL_NOTIFICATIONS.HEADER_TITLE
    }
  }, children));
};
//# sourceMappingURL=moduleContext.js.map