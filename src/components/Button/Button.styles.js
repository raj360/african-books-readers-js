import { StyleSheet } from 'react-native';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    alignSelf: 'center',
  },
  buttonTitle: {
    fontWeight: fonts.weight.bold,
    lineHeight: fonts.lineHeight.regular,
    fontSize: fonts.size.regular,
  },
  primaryButton: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  primaryButtonTitle: {
    color: colors.main,
  },
  disabledPrimaryButton: {
    borderColor: colors.disabled,
    backgroundColor: colors.disabled,
  },
  disabledPrimaryButtonTitle: {
    color: colors.disabledText,
  },
  secondaryButton: {
    borderColor: colors.primary,
    backgroundColor: colors.main,
  },
  secondaryButtonTitle: {
    color: colors.primary,
  },
  disabledSecondaryButton: {
    borderColor: colors.disabled,
    backgroundColor: colors.main,
  },
  disabledSecondaryButtonTitle: {
    color: colors.disabledText,
  },
});
