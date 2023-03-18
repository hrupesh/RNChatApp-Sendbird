import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {useUserList} from '@sendbird/uikit-chat-hooks';
import {
  createUserListModule,
  GroupChannelCreateFragment,
  useLocalization,
  UserListModule,
  useSendbirdChat,
} from '@sendbird/uikit-react-native';
import {
  PASS,
  SendbirdGroupChannelCreateParams,
  useFreshCallback,
  UserStruct,
} from '@sendbird/uikit-utils';

const createGroupChannelCreateFragment = <UserType extends UserStruct>(
  initModule?: Partial<UserListModule<UserType>>,
): GroupChannelCreateFragment<UserType> => {
  const UserListModule = createUserListModule<UserType>(initModule);

  const TECH_SUPPORT_USER_ID: string =
    'THIS_IS_DEVELOPER_OR_TECH_SUPPORT_USER_ID';
  const HEADER_TITLE = 'CONTACT US';

  return ({
    onPressHeaderLeft,
    onBeforeCreateChannel = PASS,
    onCreateChannel,
    sortComparator,
    queryCreator,
    channelType = 'GROUP',
    renderUser,
  }) => {
    const {sdk, currentUser} = useSendbirdChat();
    const {STRINGS} = useLocalization();
    const {users, refreshing, loading, error, refresh, next} = useUserList(
      sdk,
      {
        queryCreator,
        sortComparator,
      },
    );

    const handleCreateChannelPress = async () => {
      const params: SendbirdGroupChannelCreateParams = {
        invitedUserIds: [currentUser?.userId, TECH_SUPPORT_USER_ID],
        name: 'Technical Support',
        coverUrl: 'https://picsum.photos/600/1000',
        isDistinct: true,
        isDiscoverable: false,
        isPublic: false,
        operatorUserIds: [TECH_SUPPORT_USER_ID],
      };
      const processedParams = await onBeforeCreateChannel(params, users);
      const channel = await sdk.groupChannel.createChannel(processedParams);
      onCreateChannel(channel);
    };

    const _renderUser: NonNullable<typeof renderUser> = useFreshCallback(
      (user, selectedUsers, setSelectedUsers) => {
        if (queryCreator && !renderUser) {
          const hasRequiredKey =
            Object.hasOwn(user, 'profileUrl') &&
            Object.hasOwn(user, 'nickname');
          if (!hasRequiredKey)
            throw new Error(
              'You should provide "renderUser" when providing "queryCreator"',
            );
        }

        if (renderUser)
          return renderUser(user, selectedUsers, setSelectedUsers);

        const isMe = user.userId === currentUser?.userId;
        if (isMe) return null;

        const userIdx = selectedUsers.findIndex(u => u.userId === user.userId);
        const isSelected = userIdx > -1;

        const isTechSupportUser = user.userId === TECH_SUPPORT_USER_ID;
        if (!isTechSupportUser) return null;

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleCreateChannelPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 18,
              backgroundColor: '#ddd8',
            }}>
            <Image
              source={{uri: 'https://picsum.photos/100'}}
              resizeMode={'contain'}
              style={{height: 40, width: 40, borderRadius: 20, marginRight: 18}}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                lineHeight: 24,
                letterSpacing: 1,
                color: '#222',
              }}>{`${user?.nickname ?? 'USER NAME'}`}</Text>
          </TouchableOpacity>
        );
      },
    );

    return (
      <UserListModule.Provider
        headerRight={() => ''}
        headerTitle={HEADER_TITLE}>
        <UserListModule.Header
          onPressHeaderLeft={onPressHeaderLeft}
          onPressHeaderRight={() => {}}
        />
        <UserListModule.List
          onLoadNext={next}
          users={users}
          renderUser={_renderUser}
          onRefresh={refresh}
          refreshing={refreshing}
          ListEmptyComponent={<UserListModule.StatusEmpty />}
        />
      </UserListModule.Provider>
    );
  };
};

export default createGroupChannelCreateFragment;
