import type { SendbirdFileMessage } from '@sendbird/uikit-utils';
type Props = {
    fileMessage: SendbirdFileMessage;
    deleteMessage: () => Promise<void>;
    onClose: () => void;
    onPressDownload?: (message: SendbirdFileMessage) => void;
    onPressDelete?: (message: SendbirdFileMessage) => void;
    headerShown?: boolean;
    headerTopInset?: number;
};
declare const FileViewer: ({ headerShown, deleteMessage, headerTopInset, fileMessage, onPressDownload, onPressDelete, onClose, }: Props) => JSX.Element;
export default FileViewer;
