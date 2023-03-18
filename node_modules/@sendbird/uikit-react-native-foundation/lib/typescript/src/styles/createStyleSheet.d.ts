import { StyleSheet } from 'react-native';
/**
 * Create StyleSheet with customized pre-processor
 * Return a StyleSheet that pre-processed
 * @param styles
 * @returns StyleSheet
 * */
declare const createStyleSheet: <T extends StyleSheet.NamedStyles<T>>(styles: T | StyleSheet.NamedStyles<T>) => T;
export default createStyleSheet;
