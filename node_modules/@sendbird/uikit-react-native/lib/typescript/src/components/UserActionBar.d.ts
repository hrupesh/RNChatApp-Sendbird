import type { GestureResponderEvent } from 'react-native';
type Props = {
    uri: string;
    name: string;
    label?: string;
    muted: boolean;
    disabled: boolean;
    onPressActionMenu?: (ev: GestureResponderEvent) => void;
    onPressAvatar?: (ev: GestureResponderEvent) => void;
};
declare const UserActionBar: ({ muted, uri, name, disabled, label, onPressActionMenu, onPressAvatar }: Props) => JSX.Element;
export default UserActionBar;
