import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  indicator: {
    height: 7,
    width: 7,
    borderRadius: 3.5,
    backgroundColor: '#F8CB59',
    marginRight: 5,
  },
  text: {
    color: colors.black,
    opacity: 0.5,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.small,
  },
  isLight: {
    color: colors.main,
    opacity: 1,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.medium,
  },
  removingDateText: {
    width: '150%',
    fontSize: fonts.size.caption,
    color: colors.dateGray,
  },
});
