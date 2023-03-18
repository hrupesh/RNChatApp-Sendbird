import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import IconAssets from '../../assets/icon';
type IconNames = keyof typeof IconAssets;
type Props = {
    icon: IconNames;
    color?: string;
    size?: number;
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const Icon: ((props: Props) => JSX.Element) & {
    Assets: typeof IconAssets;
};
export default Icon;
