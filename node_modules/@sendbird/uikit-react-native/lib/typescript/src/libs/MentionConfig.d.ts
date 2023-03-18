export interface MentionConfigInterface {
    mentionLimit: number;
    suggestionLimit: number;
    debounceMills: number;
    delimiter: string;
    trigger: string;
}
declare class MentionConfig {
    private _config;
    static DEFAULT: {
        MENTION_LIMIT: number;
        SUGGESTION_LIMIT: number;
        DEBOUNCE_MILLS: number;
        DELIMITER: string;
        TRIGGER: string;
    };
    constructor(_config: MentionConfigInterface);
    get mentionLimit(): number;
    get suggestionLimit(): number;
    get delimiter(): string;
    get debounceMills(): number;
    get trigger(): string;
}
export default MentionConfig;
