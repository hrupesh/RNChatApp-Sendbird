import type { UIKitColorScheme, UIKitTheme } from '../types';
/**
 * select method factory
 * Select method returns the most fitting value for the color scheme you are currently running on.
 * @param colorScheme
 * @returns Function
 * */
declare const createSelectByColorScheme: (colorScheme: UIKitColorScheme) => UIKitTheme['select'];
export default createSelectByColorScheme;
