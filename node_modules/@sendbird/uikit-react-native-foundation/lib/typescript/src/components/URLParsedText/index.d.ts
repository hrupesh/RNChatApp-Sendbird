import type { TextProps } from '../Text';
type OnPressUrl = (url: string, httpProtocol: boolean) => void;
type Props = TextProps & {
    onPressUrl?: OnPressUrl;
    strict?: boolean;
};
declare const URLParsedText: ({ children, onPressUrl, strict, ...props }: Props) => JSX.Element;
export default URLParsedText;
