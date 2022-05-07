import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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
    fontSize: fonts.size.smallest,
    color: colors.reivews,
  },
  rating: {
    flexDirection: 'row',
    width: 118,
    paddingTop: 5,
  },
  image: { width: 115, height: 176, resizeMode: 'stretch' },
});
