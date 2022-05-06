import { StyleSheet } from 'react-native';
import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.transparent,
    paddingVertical: 5,
    backgroundColor: colors.main,
  },
  icon: { paddingRight: 10, margin: 5 },
  buttonContainer: {
    margin: 5,
    paddingRight: 10,
  },
  buttonText: {
    color: colors.defaultBlack,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.medium,
    fontFamily: fonts.family.medium,
  },
  subText: {
    color: colors.defaultBlack,
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.light,
    fontWeight: fonts.weight.light,
  },
});
