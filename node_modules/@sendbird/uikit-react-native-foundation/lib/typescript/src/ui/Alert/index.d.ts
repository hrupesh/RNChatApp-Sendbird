import { AlertButton } from 'react-native';
export type AlertItem = {
    title?: string;
    message?: string;
    buttons?: AlertButton[];
};
type Props = {
    visible: boolean;
    onHide: () => void;
    onDismiss?: () => void;
} & AlertItem;
declare const Alert: ({ onDismiss, visible, onHide, title, message, buttons }: Props) => JSX.Element;
export default Alert;
