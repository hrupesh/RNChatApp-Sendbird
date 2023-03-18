import type { SendbirdAdminMessage } from '@sendbird/uikit-utils';
import type { MessageRendererInterface } from '../index';
export type AdminMessageProps = MessageRendererInterface<SendbirdAdminMessage>;
declare const AdminMessage: ({ message, nextMessage }: AdminMessageProps) => JSX.Element;
export default AdminMessage;
