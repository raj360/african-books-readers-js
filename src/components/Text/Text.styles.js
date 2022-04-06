import { StyleSheet } from 'react-native';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  text: {
    color: colors.baseFont,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weight.regular,
    fontFamily: fonts.family.base,
  },
});
