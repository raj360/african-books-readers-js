import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import fonts from 'themes/fonts';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  searchInput: {
    width: SCREEN_WIDTH * 0.9,
  },
});
