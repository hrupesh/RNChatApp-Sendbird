import React, { createContext } from 'react';
import ProviderLayout from '../../../components/ProviderLayout';
import { useLocalization } from '../../../hooks/useContext';
export const GroupChannelMutedMembersContexts = {
  Fragment: /*#__PURE__*/createContext({
    headerTitle: '',
    channel: {}
  })
};
export const GroupChannelMutedMembersContextsProvider = _ref => {
  let {
    channel,
    children
  } = _ref;
  const {
    STRINGS
  } = useLocalization();
  return /*#__PURE__*/React.createElement(ProviderLayout, null, /*#__PURE__*/React.createElement(GroupChannelMutedMembersContexts.Fragment.Provider, {
    value: {
      headerTitle: STRINGS.GROUP_CHANNEL_MUTED_MEMBERS.HEADER_TITLE,
      channel
    }
  }, children));
};
//# sourceMappingURL=moduleContext.js.map