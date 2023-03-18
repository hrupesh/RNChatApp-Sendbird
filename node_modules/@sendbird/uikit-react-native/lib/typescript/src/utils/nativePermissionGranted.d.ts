import type { Permission, PermissionStatus } from 'react-native-permissions';
declare const nativePermissionGranted: (stats: Record<Permission, PermissionStatus>, limitedCallback?: () => void) => boolean;
export default nativePermissionGranted;
