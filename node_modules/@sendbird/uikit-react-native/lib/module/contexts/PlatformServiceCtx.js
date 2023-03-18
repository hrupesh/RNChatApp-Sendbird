import React from 'react';
export const PlatformServiceContext = /*#__PURE__*/React.createContext(null);
export const PlatformServiceProvider = _ref => {
  let {
    children,
    fileService,
    clipboardService,
    notificationService,
    mediaService
  } = _ref;
  return /*#__PURE__*/React.createElement(PlatformServiceContext.Provider, {
    value: {
      fileService,
      clipboardService,
      notificationService,
      mediaService
    }
  }, children);
};
//# sourceMappingURL=PlatformServiceCtx.js.map