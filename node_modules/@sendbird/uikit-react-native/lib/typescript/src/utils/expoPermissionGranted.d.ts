import type { NotificationPermissionsStatus } from 'expo-notifications';
export interface ExpoPermissionResponse {
    canAskAgain: boolean;
    granted: boolean;
    status: 'denied' | 'granted' | 'undetermined';
}
export interface ExpoMediaLibraryPermissionResponse extends ExpoPermissionResponse {
    accessPrivileges?: 'all' | 'limited' | 'none';
}
export interface ExpoPushPermissionResponse extends ExpoPermissionResponse, NotificationPermissionsStatus {
}
declare const expoPermissionGranted: (stats: Array<ExpoMediaLibraryPermissionResponse | ExpoPushPermissionResponse | ExpoPermissionResponse>, limitedCallback?: () => void) => boolean;
export default expoPermissionGranted;
