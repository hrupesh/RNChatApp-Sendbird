import Icon from '../../components/Icon';
type Props = {
    loading?: boolean;
    icon: keyof typeof Icon.Assets;
    message?: string;
    errorRetryLabel?: string;
    onPressRetry?: () => void;
};
declare const Placeholder: ({ icon, loading, message, errorRetryLabel, onPressRetry }: Props) => JSX.Element;
export default Placeholder;
