import { StyleSheet } from 'react-native';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  text: {
    color: colors.defaultBlack,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weight.regular,
    fontFamily: fonts.family.base,
  },
});
