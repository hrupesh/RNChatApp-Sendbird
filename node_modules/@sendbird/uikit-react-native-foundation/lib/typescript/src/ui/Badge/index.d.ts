import { StyleProp, ViewStyle } from 'react-native';
type Props = {
    count: number;
    maxCount?: number;
    badgeColor?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
    size?: 'small' | 'default';
};
declare const Badge: ({ count, maxCount, badgeColor, textColor, style, size }: Props) => JSX.Element;
export default Badge;
