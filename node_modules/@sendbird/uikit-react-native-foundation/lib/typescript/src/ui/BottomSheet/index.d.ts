import type Icon from '../../components/Icon';
type HeaderProps = {
    onClose: () => Promise<void>;
};
export type BottomSheetItem = {
    sheetItems: {
        icon?: keyof typeof Icon.Assets;
        iconColor?: string;
        title: string;
        titleColor?: string;
        onPress: () => void;
    }[];
    HeaderComponent?: (props: HeaderProps) => JSX.Element;
};
type Props = {
    visible: boolean;
    onHide: () => Promise<void>;
    onError?: (error: unknown) => void;
    onDismiss?: () => void;
} & BottomSheetItem;
declare const BottomSheet: ({ onDismiss, onHide, visible, sheetItems, HeaderComponent }: Props) => JSX.Element;
export default BottomSheet;
