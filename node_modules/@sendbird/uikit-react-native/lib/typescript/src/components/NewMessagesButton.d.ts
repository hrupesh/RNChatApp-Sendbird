import React from 'react';
import type { SendbirdMessage } from '@sendbird/uikit-utils';
type Props = {
    newMessages: SendbirdMessage[];
    visible: boolean;
    onPress: () => void;
};
declare const _default: React.MemoExoticComponent<({ newMessages, visible, onPress }: Props) => JSX.Element | null>;
export default _default;
