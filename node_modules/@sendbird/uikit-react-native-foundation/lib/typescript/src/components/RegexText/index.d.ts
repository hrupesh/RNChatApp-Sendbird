import { TextProps } from '../Text';
interface Pattern {
    regex: RegExp;
    replacer(params: {
        match: string;
        groups: string[];
        index: number;
        keyPrefix: string;
        parentProps?: TextProps;
    }): string | JSX.Element;
}
type Props = {
    patterns: Pattern[];
} & TextProps;
declare const RegexText: ({ children, patterns, ...props }: Props) => JSX.Element;
export default RegexText;
