import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Icon from '../../components/Icon';
type Props = React.PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
    icon?: keyof typeof Icon.Assets;
    variant?: 'contained' | 'text';
    disabled?: boolean;
    onPress?: () => void;
    buttonColor?: string;
    contentColor?: string;
}>;
declare const Button: ({ icon, variant, buttonColor, contentColor, disabled, onPress, style, children, }: Props) => JSX.Element;
export default Button;
