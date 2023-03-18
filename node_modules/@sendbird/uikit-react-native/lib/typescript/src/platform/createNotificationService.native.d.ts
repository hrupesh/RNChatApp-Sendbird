import type RNFBMessaging from '@react-native-firebase/messaging';
import type * as Permissions from 'react-native-permissions';
import type { NotificationServiceInterface } from './types';
declare const createNativeNotificationService: ({ messagingModule, permissionModule, }: {
    messagingModule: typeof RNFBMessaging;
    permissionModule: typeof Permissions;
}) => NotificationServiceInterface;
export default createNativeNotificationService;
