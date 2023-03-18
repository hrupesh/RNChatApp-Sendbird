import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Icon from '../../components/Icon';
type Props = React.PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
}>;
declare const DialogSheet: ((props: Props) => JSX.Element) & {
    Item: typeof SheetItem;
};
export type SheetItemProps = {
    icon?: keyof typeof Icon.Assets;
    iconColor?: string;
    title: string;
    titleColor?: string;
};
declare const SheetItem: ({ icon, title, iconColor, titleColor }: SheetItemProps) => JSX.Element;
export default DialogSheet;
