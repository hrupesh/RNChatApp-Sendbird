import { StyleProp, ViewStyle } from 'react-native';
type OutlinedButtonProps = {
    children: string;
    containerStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
};
declare const OutlinedButton: ({ children, onPress, containerStyle }: OutlinedButtonProps) => JSX.Element;
export default OutlinedButton;
