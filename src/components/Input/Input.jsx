import React, { useCallback, useState } from 'react';
import { TextInput, View, Keyboard, TouchableOpacity, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import colors from 'themes/colors';

import styles from './Input.styles';

function Input({
  value,
  onChangeText,
  placeholder,
  isPassword,
  label,
  disabled,
  errors,
  onBlur,
  onKeyPress,
  labelStyle,
  errorStyle,
  style,
  onSubmitEditing,
  containerStyle,
  inputRef,
  keyboardType,
  maxLength,
  autoCapitalize,
  rightIcon,
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur();
  }, [onBlur, setFocused]);

  return (
    <View style={containerStyle}>
      <Text
        style={[
          styles.label,
          labelStyle,
          !!errors.length && styles.errorMessage,
          errorStyle,
          disabled && styles.disabled,
        ]}
      >
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          !!errors.length && styles.error,
          disabled && styles.disabled,
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={colors.disabledText}
          onChangeText={onChangeText}
          value={value}
          focused={focused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          editable={!disabled}
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing();
            } else {
              Keyboard.dismiss();
            }
          }}
          secureTextEntry={isPassword}
          blurOnSubmit={false}
          ref={inputRef}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
        />
        {rightIcon && <View style={[styles.rightIcon, style]}>{rightIcon}</View>}
      </View>
      {!!errors.length &&
        errors.map((error) => (
          <Text key={error} style={[styles.errorMessage, errorStyle]}>
            {error}
          </Text>
        ))}
    </View>
  );
}

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isPassword: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  labelStyle: RNText.propTypes.style,
  errorStyle: RNText.propTypes.style,
  style: RNText.propTypes.style,
  containerStyle: PropTypes.object,
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  isPassword: false,
  disabled: false,
  errors: [],
  onBlur: () => {},
  onKeyPress: () => {},
  labelStyle: {},
  errorStyle: {},
  style: {},
};

export default Input;
