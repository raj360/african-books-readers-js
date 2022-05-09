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
    fontWeight: fonts.weight.medium,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  logo: {
    height: 32,
    width: 32,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.main,
  },
  headerView: {
    backgroundColor: colors.backGround,
    height: 230,
    paddingHorizontal: 26,
  },
  headerCaption: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.medium,
    fontFamily: fonts.family.medium,
  },
  sideImage: {
    marginLeft: 5,
    height: 135,
    width: 147,
    borderWidth: 1,
    borderColor: colors.main,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  headerViewCard: {
    flexDirection: 'row',
    height: 145,
    backgroundColor: colors.main,
    borderRadius: 5,
  },
  author: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
  },
  bookName: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.medium,
    fontFamily: fonts.family.medium,
  },
  nestedListView: {
    backgroundColor: colors.main,
    paddingHorizontal: 26,
  },
  viewHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAllText: {
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.regular,
    fontFamily: fonts.family.regular,
    color: '#868B97',
  },
  viewAllContainer: {
    flexDirection: 'row',
    paddingTop: 9,
    paddingBottom: 15,
    alignItems: 'flex-end',
  },
  bookImage: {
    height: 148,
    width: 104,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: colors.main,
    resizeMode: 'stretch',
  },
  authorImage: {
    height: 58,
    width: 58,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: colors.main,
  },
  authorContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  authorName: {
    fontSize: fonts.size.tiny,
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
    width: 54,
    textAlign: 'center',
  },
});
