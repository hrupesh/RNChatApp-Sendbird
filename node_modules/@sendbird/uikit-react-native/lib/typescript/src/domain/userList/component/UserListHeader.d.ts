import React from 'react';
import type { UserListProps } from '../types';
declare const UserListHeader: <T>({ onPressHeaderLeft, onPressHeaderRight, right, left, shouldActivateHeaderRight, }: {
    right?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    left?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    onPressHeaderLeft: () => void;
    onPressHeaderRight: (selectedUsers: T[]) => Promise<void>;
    shouldActivateHeaderRight?: ((selectedUsers: T[]) => boolean) | undefined;
}) => JSX.Element;
export default UserListHeader;
