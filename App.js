import AsyncStorage from '@react-native-async-storage/async-storage';
import {SendbirdUIKitContainer} from '@sendbird/uikit-react-native';
import React from 'react';
import {
  ClipboardService,
  FileService,
  MediaService,
  NotificationService,
} from './services';
import {Navigation} from './src/navigation';

const App = () => (
  <SendbirdUIKitContainer
    appId={'APP_ID_HERE'}
    chatOptions={{localCacheStorage: AsyncStorage}}
    platformServices={{
      file: FileService,
      notification: NotificationService,
      clipboard: ClipboardService,
      media: MediaService,
    }}
    userProfile={{
      onCreateChannel: () => {},
    }}>
    <Navigation />
  </SendbirdUIKitContainer>
);

export default App;
