import colors from 'themes/colors';
import fonts from 'themes/fonts';
import { Platform, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const commonStyles = {
  screen: {
    flex: 1,
    backgroundColor: colors.main,
  },
  screenContent: {
    flex: 1,
    marginHorizontal: 20,
  },
  tabBar: {
    borderTopColor: colors.main,
    ...(Platform.OS === 'android' && {
      height: 70,
    }),
  },
  tab: {
    ...(Platform.OS === 'android'
      ? {
          paddingBottom: 13,
          paddingTop: 10,
        }
      : {
          marginTop: 5,
        }),
  },
  labelStyle: {
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.tiny,
    marginBottom: SCREEN_HEIGHT <= 600 ? 5 : undefined,
  },
};

export default commonStyles;
