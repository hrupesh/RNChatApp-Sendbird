import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
type Props = React.PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
}>;
declare const DialogBox: ({ style, children }: Props) => JSX.Element;
export default DialogBox;
