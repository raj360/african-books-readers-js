import Colors from 'constants/Colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import fonts from 'themes/fonts';
import colors from 'themes/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: getStatusBarHeight(),
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginTop: 65,
  },
  title: {
    paddingLeft: 48,
    width: 350,
    fontSize: fonts.size.title,
    fontWeight: fonts.weight.medium,
    color: colors.main,
    marginTop: 75,
  },
  text: {
    paddingLeft: 48,
    width: 350,
    color: colors.main,
    marginTop: 33,
    fontSize: fonts.size.medium,
  },
  textButton: {
    color: colors.main,
    fontSize: fonts.size.h4,
    textDecorationLine: 'underline',
    marginTop: 150,
    alignSelf: 'center',
    marginBottom: 36,
  },
  button: { marginTop: 'auto', width: SCREEN_WIDTH * 0.8 },
});
