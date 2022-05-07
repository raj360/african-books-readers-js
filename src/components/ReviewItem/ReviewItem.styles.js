import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: fonts.weight.medium,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.caption,
    color: colors.defaultBlack,
  },
  author: {
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
    fontSize: fonts.size.caption,
    color: colors.textGray,
  },
  reviews: {
    fontWeight: fonts.weight.light,
    fontSize: fonts.size.tiny,
    color: colors.reivews,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 122,
    paddingTop: 5,
  },
  image: { width: 115, height: 176 },
});
