import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    width: '100%',
  },
  statusBar: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: colors.main,
  },
  content: {
    width: '100%',
  },
  iosBottomScrollBackColor: {
    backgroundColor: '#fff',
    height: 1000,
    position: 'absolute',
    bottom: -1000,
    left: 0,
    right: 0,
  },
  pageLoading: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  headlineText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },

  buttonContainer: {
    width: '90%',
    backgroundColor: '#44475a',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
});
