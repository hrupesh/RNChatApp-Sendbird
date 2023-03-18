import type * as ExpoNotification from 'expo-notifications';
import type { NotificationServiceInterface } from './types';
declare const createExpoNotificationService: (messagingModule: typeof ExpoNotification) => NotificationServiceInterface;
export default createExpoNotificationService;
