import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
declare const TextInput: React.ForwardRefExoticComponent<{
    variant?: "default" | "underline" | undefined;
} & TextInputProps & React.RefAttributes<RNTextInput>>;
export default TextInput;
