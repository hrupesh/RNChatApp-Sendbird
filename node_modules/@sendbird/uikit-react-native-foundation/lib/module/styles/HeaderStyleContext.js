import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import getDefaultHeaderHeight from './getDefaultHeaderHeight';
export const HeaderStyleContext = /*#__PURE__*/React.createContext({
  HeaderComponent: () => null,
  defaultTitleAlign: 'left',
  statusBarTranslucent: true,
  topInset: StatusBar.currentHeight ?? 0,
  defaultHeight: getDefaultHeaderHeight(false)
});
export const HeaderStyleProvider = _ref => {
  let {
    children,
    HeaderComponent = () => null,
    defaultTitleAlign,
    statusBarTranslucent
  } = _ref;
  const {
    top
  } = useSafeAreaInsets();
  const {
    width,
    height
  } = useWindowDimensions();
  return /*#__PURE__*/React.createElement(HeaderStyleContext.Provider, {
    value: {
      HeaderComponent,
      defaultTitleAlign,
      statusBarTranslucent,
      topInset: statusBarTranslucent ? top : 0,
      defaultHeight: getDefaultHeaderHeight(width > height)
    }
  }, children);
};
//# sourceMappingURL=HeaderStyleContext.js.map