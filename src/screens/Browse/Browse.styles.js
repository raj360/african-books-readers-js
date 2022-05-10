import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;

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
    marginBottom: 20,
  },
  searchInput: {
    width: SCREEN_WIDTH * 0.9,
  },
  filterTextContainer: {
    borderWidth: 1,
    borderColor: colors.tabBarInactive,
    padding: 9,
    backgroundColor: colors.tabBarInactive,
    width: 120,
    borderRadius: 28,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  filterText: {
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
    fontSize: fonts.size.small,
  },
  noSearchText: {
    color: colors.dateGray,
    alignSelf: 'center',
    paddingVertical: 30,
  },
  sortOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
  },
});
