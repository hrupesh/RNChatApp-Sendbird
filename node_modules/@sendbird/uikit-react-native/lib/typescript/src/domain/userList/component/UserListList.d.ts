import React from 'react';
import type { UserStruct } from '@sendbird/uikit-utils';
import type { UserListProps } from '../types';
declare const UserListList: <T extends UserStruct>({ users, onRefresh, refreshing, renderUser, onLoadNext, ListEmptyComponent, }: {
    users: T[];
    renderUser: (user: T, selectedUsers: T[], setSelectedUsers: React.Dispatch<React.SetStateAction<T[]>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    onLoadNext: () => Promise<void>;
    onRefresh?: (() => Promise<void>) | undefined;
    refreshing?: boolean | undefined;
    ListEmptyComponent?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
}) => JSX.Element;
export default UserListList;
