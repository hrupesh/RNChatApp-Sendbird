declare const usePushTokenRegistration: () => {
    registerPushTokenForCurrentUser: () => Promise<void>;
    unregisterPushTokenForCurrentUser: () => Promise<void>;
};
export default usePushTokenRegistration;
