export declare const ReactionAddons: {
    BottomSheet: ({ onClose, message, channel }: {
        onClose: () => Promise<void>;
        channel: import("@sendbird/chat").BaseChannel;
        message: import("@sendbird/chat/message").BaseMessage;
    }) => JSX.Element;
    Message: ({ channel, message }: {
        channel: import("@sendbird/chat").BaseChannel;
        message: import("@sendbird/chat/message").BaseMessage;
    }) => JSX.Element | null;
};
