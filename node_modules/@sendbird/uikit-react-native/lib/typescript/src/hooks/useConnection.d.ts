import { SendbirdUser } from '@sendbird/uikit-utils';
type ConnectOptions = {
    nickname?: string;
    accessToken?: string;
};
declare const useConnection: () => {
    connect: (userId: string, opts?: ConnectOptions) => Promise<SendbirdUser>;
    disconnect: () => Promise<void>;
    reconnect: () => boolean;
};
export default useConnection;
