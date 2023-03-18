import React from 'react';
type SwitchProps = React.PropsWithChildren<{
    trackColor?: string;
    thumbColor?: string;
    inactiveThumbColor?: string;
    inactiveTrackColor?: string;
    value: boolean;
    onChangeValue: (val: boolean) => void;
}>;
declare const Switch: ({ value, onChangeValue, inactiveThumbColor, inactiveTrackColor, trackColor, thumbColor, }: SwitchProps) => JSX.Element;
export default Switch;
