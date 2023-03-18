import {useNavigation} from '@react-navigation/native';
import {useConnection} from '@sendbird/uikit-react-native';
import React from 'react';
import {Text} from 'react-native';
import createGroupChannelCreateFragment from '../helpers/createGroupChannelCreateFragment';

const GroupChannelCreateFragment = createGroupChannelCreateFragment();

export const GroupChannelCreateScreen = () => {
  const navigation = useNavigation<any>();
  const {disconnect} = useConnection();

  const handleBackPress = () => {
    disconnect();
  };

  const navigateToGroupChannelScreen = async channel => {
    navigation.replace('GroupChannel', {channelUrl: channel.url});
  };

  return (
    <GroupChannelCreateFragment
      onCreateChannel={navigateToGroupChannelScreen}
      onPressHeaderLeft={handleBackPress}
    />
  );
};
