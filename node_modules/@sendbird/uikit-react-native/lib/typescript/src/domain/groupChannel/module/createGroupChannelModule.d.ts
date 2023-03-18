import type { GroupChannelModule } from '../types';
declare const createGroupChannelModule: ({ Header, MessageList, Input, SuggestedMentionList, StatusLoading, StatusEmpty, Provider, ...module }?: Partial<GroupChannelModule>) => GroupChannelModule;
export default createGroupChannelModule;
