/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react';
import { NOOP } from '@sendbird/uikit-utils';
import ProviderLayout from '../../../components/ProviderLayout';
export const UserListContexts = {
  Fragment: /*#__PURE__*/createContext({
    headerTitle: '',
    headerRight: ''
  }),
  List: /*#__PURE__*/createContext({
    selectedUsers: [],
    setSelectedUsers: NOOP
  })
};
export const UserListContextsProvider = _ref => {
  let {
    children,
    headerTitle,
    headerRight
  } = _ref;
  const [selectedUsers, setSelectedUsers] = useState([]);
  return /*#__PURE__*/React.createElement(ProviderLayout, null, /*#__PURE__*/React.createElement(UserListContexts.Fragment.Provider, {
    value: {
      headerTitle,
      headerRight: headerRight(selectedUsers)
    }
  }, /*#__PURE__*/React.createElement(UserListContexts.List.Provider, {
    value: {
      selectedUsers,
      setSelectedUsers
    }
  }, children)));
};
//# sourceMappingURL=moduleContext.js.map