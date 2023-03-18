import type { FileMessageProps } from './index';
type Props = FileMessageProps & {
    type: 'image' | 'audio' | 'video' | 'file';
};
declare const BaseFileMessage: ({ message, variant, pressed, type, children }: Props) => JSX.Element;
export default BaseFileMessage;
