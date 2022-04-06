import { StyleSheet, Dimensions } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

export const HEADER_HEIGHT = SCREEN_HEIGHT <= 600 ? 54 : 64;

export default StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'relative',
  },
  left: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  center: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  title: {
    maxWidth: '70%',
    color: colors.defaultBlack,
    fontWeight: fonts.weight.bold,
    fontSize: SCREEN_HEIGHT <= 600 ? fonts.size.medium : fonts.size.h4,
    textAlign: 'center',
  },
});
