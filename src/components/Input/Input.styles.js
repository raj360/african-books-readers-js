import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 34,
    borderWidth: 1,
    borderColor: colors.main,
    marginVertical: 2,
    position: 'relative',
    borderBottomColor: colors.defaultBlack,
    fontSize: 20,
  },
  disabled: {
    backgroundColor: colors.disabledBackground,
    color: colors.disabledText,
    borderColor: colors.disabled,
  },
  inputFocused: {
    borderBottomColor: colors.primary,
  },
  label: {
    fontSize: fonts.size.small,
    color: colors.label,
  },
  labelFocused: {
    color: colors.primary,
  },
  error: {
    borderColor: colors.error,
  },
  errorMessage: {
    fontSize: fonts.size.caption,
    color: colors.error,
  },
  input: {
    flex: 1,
    color: colors.black,
    fontFamily: fonts.family.base,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weight.regular,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    height: 26,
    width: 26,
  },
});
