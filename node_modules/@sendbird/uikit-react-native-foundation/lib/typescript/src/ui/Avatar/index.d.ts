import { StyleProp, ViewStyle } from 'react-native';
import AvatarGroup from './AvatarGroup';
import AvatarIcon from './AvatarIcon';
type SubComponents = {
    Group: typeof AvatarGroup;
    Icon: typeof AvatarIcon;
};
type Props = {
    uri?: string;
    size?: number;
    square?: boolean;
    muted?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const Avatar: ((props: Props) => JSX.Element) & SubComponents;
export default Avatar;
