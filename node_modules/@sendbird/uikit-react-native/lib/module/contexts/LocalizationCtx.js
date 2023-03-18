import React from 'react';
export const LocalizationContext = /*#__PURE__*/React.createContext(null);
export const LocalizationProvider = _ref => {
  let {
    children,
    stringSet
  } = _ref;
  return /*#__PURE__*/React.createElement(LocalizationContext.Provider, {
    value: {
      STRINGS: stringSet
    }
  }, children);
};
//# sourceMappingURL=LocalizationCtx.js.map