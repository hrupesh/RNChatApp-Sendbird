import type * as ExpoDocumentPicker from 'expo-document-picker';
import type * as ExpoFs from 'expo-file-system';
import type * as ExpoImagePicker from 'expo-image-picker';
import type * as ExpoMediaLibrary from 'expo-media-library';
import type { FileServiceInterface } from './types';
declare const createExpoFileService: ({ imagePickerModule, documentPickerModule, mediaLibraryModule, fsModule, }: {
    imagePickerModule: typeof ExpoImagePicker;
    documentPickerModule: typeof ExpoDocumentPicker;
    mediaLibraryModule: typeof ExpoMediaLibrary;
    fsModule: typeof ExpoFs;
}) => FileServiceInterface;
export default createExpoFileService;
