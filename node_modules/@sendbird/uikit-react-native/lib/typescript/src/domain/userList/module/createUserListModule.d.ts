import type { UserStruct } from '@sendbird/uikit-utils';
import type { UserListModule } from '../types';
declare const createUserListModule: <T extends UserStruct>({ Header, List, StatusLoading, StatusEmpty, StatusError, Provider, ...module }?: Partial<UserListModule<T>>) => UserListModule<T>;
export default createUserListModule;
