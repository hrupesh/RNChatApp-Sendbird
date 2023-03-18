export type PromptItem = {
    title: string;
    placeholder?: string;
    defaultValue?: string;
    onSubmit?: (text: string) => void;
    submitLabel?: string;
    onCancel?: () => void;
    cancelLabel?: string;
};
type Props = {
    visible: boolean;
    onHide: () => void;
    onDismiss?: () => void;
    autoFocus?: boolean;
} & PromptItem;
declare const Prompt: ({ onDismiss, visible, onHide, autoFocus, title, defaultValue, placeholder, onSubmit, onCancel, submitLabel, cancelLabel, }: Props) => JSX.Element;
export default Prompt;
