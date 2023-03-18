import {useRoute} from '@react-navigation/native';
import {useGroupChannel} from '@sendbird/uikit-chat-hooks';
import {
  createGroupChannelFragment,
  useConnection,
  useSendbirdChat,
} from '@sendbird/uikit-react-native';
import React from 'react';

const GroupChannelFragment = createGroupChannelFragment();

export const GroupChannelScreen = () => {
  const {params} = useRoute<any>();
  const {disconnect} = useConnection();

  const {sdk} = useSendbirdChat();
  const {channel} = useGroupChannel(sdk, params.channelUrl);
  if (!channel) {
    return null;
  }

  const handleBackPress = async () => await disconnect();

  return (
    <GroupChannelFragment
      channel={channel}
      onChannelDeleted={handleBackPress}
      onPressHeaderLeft={handleBackPress}
      onPressHeaderRight={() => {}}
    />
  );
};
