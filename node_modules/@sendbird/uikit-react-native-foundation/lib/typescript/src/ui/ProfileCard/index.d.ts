import { StyleProp, ViewStyle } from 'react-native';
type Props = {
    uri: string;
    username: string;
    button?: JSX.Element;
    bodyLabel: string;
    body: string;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const ProfileCard: ({ uri, username, bodyLabel, body, button, containerStyle }: Props) => JSX.Element;
export default ProfileCard;
