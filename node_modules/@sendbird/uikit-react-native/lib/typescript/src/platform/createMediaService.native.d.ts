import type * as RNImageResizer from '@bam.tech/react-native-image-resizer';
import type * as RNCreateThumbnail from 'react-native-create-thumbnail';
import type RNVideo from 'react-native-video';
import type { MediaServiceInterface } from './types';
type Modules = {
    VideoComponent: typeof RNVideo;
    thumbnailModule: typeof RNCreateThumbnail;
    imageResizerModule: typeof RNImageResizer;
};
declare const createNativeMediaService: ({ VideoComponent, thumbnailModule, imageResizerModule, }: Modules) => MediaServiceInterface;
export default createNativeMediaService;
