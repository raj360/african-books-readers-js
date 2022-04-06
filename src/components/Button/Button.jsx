import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { CircleSnail } from 'react-native-progress';

import Text from 'components/Text';

import colors from 'themes/colors';

import { TYPES } from './Button.constants';

import styles from './Button.styles';

function Button({
  type,
  title,
  onPress,
  disabled,
  buttonStyles,
  buttonTitleStyles,
  isLoading,
  image,
  imageStyle,
}) {
  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
      style={[
        styles.button,
        type === TYPES.PRIMARY && styles.primaryButton,
        type === TYPES.SECONDARY && styles.secondaryButton,
        isDisabled && type === TYPES.PRIMARY && styles.disabledPrimaryButton,
        isDisabled &&
          type === TYPES.SECONDARY &&
          styles.disabledSecondaryButton,
        buttonStyles,
      ]}
    >
      {isLoading ? (
        <CircleSnail color={colors.primary} />
      ) : (
        <Text
          style={[
            styles.buttonTitle,
            type === TYPES.PRIMARY && styles.primaryButtonTitle,
            type === TYPES.SECONDARY && styles.secondaryButtonTitle,
            isDisabled &&
              type === TYPES.PRIMARY &&
              styles.disabledPrimaryButtonTitle,
            isDisabled &&
              type === TYPES.SECONDARY &&
              styles.disabledSecondaryButtonTitle,
            buttonTitleStyles,
          ]}
        >
          {title}
        </Text>
      )}
      {image && <Image style={imageStyle} source={image} />}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  onPress: PropTypes.func,
  buttonStyles: PropTypes.any,
  buttonTitleStyles: Text.propTypes.style,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TYPES)),
};

Button.defaultProps = {
  onPress: () => null,
  disabled: false,
  isLoading: false,
  buttonStyles: {},
  buttonTitleStyles: {},
  type: TYPES.PRIMARY,
};

export default Button;
