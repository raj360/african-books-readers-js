import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.backGround,
    borderRadius: 34,
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  disabled: {
    backgroundColor: colors.disabledBackground,
    color: colors.disabledText,
    borderColor: colors.disabled,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    color: colors.black,
    fontFamily: fonts.family.base,
    fontSize: 16,
    fontWeight: '400',
  },
});
