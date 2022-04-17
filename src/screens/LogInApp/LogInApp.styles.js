import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: getStatusBarHeight(),
  },
  title: {
    fontSize: fonts.size.heading,
    fontWeight: fonts.weight.medium,
    width: 187,
    paddingTop: 30,
  },
  forgetPassword: {
    paddingVertical: 38,
  },
  input: {
    paddingTop: 20,
  },
  subTitle: {
    paddingVertical: 34,
  },
  bottomText: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.regular,
    color: colors.label,
  },
  bold: {
    fontWeight: '700',
    paddingLeft: 5,
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
