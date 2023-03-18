export type ActionMenuItem = {
    title?: string;
    menuItems: {
        title: string;
        style?: 'destructive';
        onPress?: (() => Promise<void>) | (() => void);
        onError?: () => void;
    }[];
};
type Props = {
    visible: boolean;
    onHide: () => void;
    onError?: (error: unknown) => void;
    onDismiss?: () => void;
} & ActionMenuItem;
declare const ActionMenu: ({ visible, onHide, onError, onDismiss, title, menuItems }: Props) => JSX.Element;
export default ActionMenu;
