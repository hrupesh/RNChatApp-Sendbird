import type { CameraRoll } from '@react-native-camera-roll/camera-roll';
import type * as DocumentPicker from 'react-native-document-picker';
import type * as FileAccess from 'react-native-file-access';
import type * as ImagePicker from 'react-native-image-picker';
import type * as Permissions from 'react-native-permissions';
import type { FileServiceInterface } from './types';
declare const createNativeFileService: ({ imagePickerModule, documentPickerModule, permissionModule, mediaLibraryModule, fsModule, }: {
    imagePickerModule: typeof ImagePicker;
    documentPickerModule: typeof DocumentPicker;
    permissionModule: typeof Permissions;
    mediaLibraryModule: typeof CameraRoll;
    fsModule: typeof FileAccess;
}) => FileServiceInterface;
export default createNativeFileService;
