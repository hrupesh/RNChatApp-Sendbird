import { UIKitTypographyOverrides } from '../styles/createTypography';
import type { UIKitColors, UIKitTheme } from '../types';
type Options = {
    colorScheme: UIKitTheme['colorScheme'];
    colors: (palette: UIKitTheme['palette']) => UIKitColors;
    palette?: UIKitTheme['palette'];
    typography?: UIKitTypographyOverrides;
};
declare const createTheme: ({ colorScheme, palette, colors: createColors, typography, }: Options) => UIKitTheme;
export default createTheme;
