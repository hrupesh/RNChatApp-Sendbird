import React from 'react';
import type { ClipboardServiceInterface, FileServiceInterface, MediaServiceInterface, NotificationServiceInterface } from '../platform/types';
type Props = React.PropsWithChildren<{
    fileService: FileServiceInterface;
    clipboardService: ClipboardServiceInterface;
    notificationService: NotificationServiceInterface;
    mediaService: MediaServiceInterface;
}>;
export type PlatformServiceContextType = {
    fileService: FileServiceInterface;
    clipboardService: ClipboardServiceInterface;
    notificationService: NotificationServiceInterface;
    mediaService: MediaServiceInterface;
};
export declare const PlatformServiceContext: React.Context<PlatformServiceContextType | null>;
export declare const PlatformServiceProvider: ({ children, fileService, clipboardService, notificationService, mediaService, }: Props) => JSX.Element;
export {};
