import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
  },
  statusBar: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
  loader: {
    alignSelf: 'center',
  },
});
