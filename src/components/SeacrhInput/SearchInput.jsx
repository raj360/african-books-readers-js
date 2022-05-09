import React, { useCallback, useState } from 'react';
import {
  TextInput,
  View,
  Keyboard,
  Text as RNText,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import SearchIcon from 'assets/icons/search.svg';
import CancelSearchIcon from 'assets/icons/cancel-search.svg';

import colors from 'themes/colors';

import styles from './SearchInput.styles';

function SearchInput({
  value,
  onChangeText,
  placeholder,
  disabled,
  onBlur,
  onKeyPress,
  style,
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur();
  }, [onBlur, setFocused]);

  const onClearInput = useCallback(() => {
    onChangeText('');
  }, [onChangeText]);

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          disabled && styles.disabled,
        ]}
      >
        <SearchIcon />
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={'rgba(127, 141, 154, 1)'}
          onChangeText={onChangeText}
          value={value}
          focused={focused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          editable={!disabled}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />
        {!!value && (
          <TouchableOpacity activeOpacity={0.7} onPress={onClearInput}>
            <CancelSearchIcon fill={colors.defaultBlack} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: RNText.propTypes.style,
};

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  onBlur: () => {},
  onKeyPress: () => {},
  style: {},
};

export default SearchInput;
