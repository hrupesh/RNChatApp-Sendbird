import type { UserStruct } from '@sendbird/uikit-utils';
import type { GroupChannelInviteFragment } from '../domain/groupChannelUserList/types';
import type { UserListModule } from '../domain/userList/types';
declare const createGroupChannelInviteFragment: <UserType extends UserStruct>(initModule?: Partial<UserListModule<UserType>> | undefined) => GroupChannelInviteFragment<UserType>;
export default createGroupChannelInviteFragment;
