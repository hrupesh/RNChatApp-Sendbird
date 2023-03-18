import type * as Clipboard from 'expo-clipboard';
import type { ClipboardServiceInterface } from './types';
declare const createExpoClipboardService: (clipboardModule: typeof Clipboard) => ClipboardServiceInterface;
export default createExpoClipboardService;
