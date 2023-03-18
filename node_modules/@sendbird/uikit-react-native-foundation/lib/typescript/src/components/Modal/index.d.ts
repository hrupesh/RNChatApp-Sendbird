import { ModalProps, StyleProp, ViewStyle } from 'react-native';
type ModalAnimationType = 'slide' | 'slide-no-gesture' | 'fade';
type Props = {
    type?: ModalAnimationType;
    onClose: () => void;
    backgroundStyle?: StyleProp<ViewStyle>;
    disableBackgroundClose?: boolean;
    enableKeyboardAvoid?: boolean;
} & Omit<ModalProps, 'animationType' | 'onRequestClose'>;
/**
 * Modal Open: Triggered by Modal.props.visible state changed to true
 * - visible true -> modalVisible true -> animation start
 *
 * Modal Close: Triggered by Modal.props.onClose() call
 * - Modal.props.onClose() -> visible false -> animation start -> modalVisible false
 * */
declare const Modal: ({ children, onClose, backgroundStyle, onDismiss, type, visible, disableBackgroundClose, enableKeyboardAvoid, statusBarTranslucent, ...props }: Props) => JSX.Element;
export default Modal;
