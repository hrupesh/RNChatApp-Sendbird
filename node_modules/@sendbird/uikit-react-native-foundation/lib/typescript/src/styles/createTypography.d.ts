import type { FontAttributes, UIKitTypography } from '../types';
export type UIKitTypographyOverrides = Partial<UIKitTypography> & {
    shared?: Partial<FontAttributes>;
};
declare const createTypography: (overrides?: UIKitTypographyOverrides, scaleFactor?: (dp: number) => number) => UIKitTypography;
export default createTypography;
