import React from 'react';
import Icon from '../../components/Icon';
export type MenuBarProps = {
    variant?: 'default' | 'contained';
    onPress: () => void;
    disabled?: boolean;
    visible?: boolean;
    icon: keyof typeof Icon.Assets;
    iconColor?: string;
    iconBackgroundColor?: string;
    name: string;
    actionLabel?: string;
    actionItem?: React.ReactNode;
};
declare const MenuBar: ({ variant, disabled, visible, onPress, name, icon, iconColor, iconBackgroundColor, actionLabel, actionItem, }: MenuBarProps) => JSX.Element | null;
export default MenuBar;
