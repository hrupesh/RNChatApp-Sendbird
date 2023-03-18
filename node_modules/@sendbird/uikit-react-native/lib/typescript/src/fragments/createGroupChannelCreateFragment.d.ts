import { UserStruct } from '@sendbird/uikit-utils';
import type { GroupChannelCreateFragment } from '../domain/groupChannelUserList/types';
import type { UserListModule } from '../domain/userList/types';
declare const createGroupChannelCreateFragment: <UserType extends UserStruct>(initModule?: Partial<UserListModule<UserType>> | undefined) => GroupChannelCreateFragment<UserType>;
export default createGroupChannelCreateFragment;
