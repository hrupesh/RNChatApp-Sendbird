import type Clipboard from '@react-native-clipboard/clipboard';
import type { ClipboardServiceInterface } from './types';
declare const createNativeClipboardService: (clipboardModule: typeof Clipboard) => ClipboardServiceInterface;
export default createNativeClipboardService;
