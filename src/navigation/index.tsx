import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSendbirdChat} from '@sendbird/uikit-react-native';
import React from 'react';
import {GroupChannelCreateScreen} from '../screens/GroupChannelCreateScreen';
import {GroupChannelListScreen} from '../screens/GroupChannelListScreen';
import {GroupChannelScreen} from '../screens/GroupChannelScreen';
import {HomeScreen} from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator();

export const Navigation = () => {
  const {currentUser} = useSendbirdChat();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {!currentUser ? (
          <RootStack.Screen name={'Home'} component={HomeScreen} />
        ) : (
          <>
            {/* <RootStack.Screen
              name={'GroupChannelList'}
              component={GroupChannelListScreen}
            /> */}
            <RootStack.Screen
              name={'GroupChannelCreate'}
              component={GroupChannelCreateScreen}
            />
            <RootStack.Screen
              name={'GroupChannel'}
              component={GroupChannelScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
