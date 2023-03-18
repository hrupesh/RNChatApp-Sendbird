import type * as ExpoAV from 'expo-av';
import type * as ExpoFS from 'expo-file-system';
import type * as ExpoImageManipulator from 'expo-image-manipulator';
import type * as ExpoVideoThumbnail from 'expo-video-thumbnails';
import type { MediaServiceInterface } from './types';
type Modules = {
    avModule: typeof ExpoAV;
    thumbnailModule: typeof ExpoVideoThumbnail;
    imageManipulator: typeof ExpoImageManipulator;
    fsModule: typeof ExpoFS;
};
declare const createExpoMediaService: ({ avModule, thumbnailModule, imageManipulator, fsModule, }: Modules) => MediaServiceInterface;
export default createExpoMediaService;
