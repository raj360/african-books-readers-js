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
    width: '100%',
  },
  statusBar: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#fff',
  },
  transactionStyles: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  titleStyle: {
    fontWeight: fonts.weight.bold,
  },
  sendMoneyButton: {
    width: SCREEN_WIDTH * 0.9,
  },
  transactionsContainer: {
    overflow: 'hidden',
    paddingTop: 2,
    height: SCREEN_HEIGHT * 0.38,
  },
  addText: {
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
    paddingRight: 10,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortIcons: {
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  sortLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
