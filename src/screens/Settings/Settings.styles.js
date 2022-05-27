import { StyleSheet } from 'react-native';
import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.transparent,
    paddingVertical: 5,
    backgroundColor: colors.main,
  },
  icon: { paddingRight: 10, margin: 5 },
  buttonContainer: {
    margin: 5,
    paddingRight: 10,
  },
  buttonText: {
    color: colors.defaultBlack,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.medium,
    fontFamily: fonts.family.medium,
  },
  subText: {
    color: colors.defaultBlack,
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.light,
    fontWeight: fonts.weight.light,
  },
  drawerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
    height: 240,
  },
  image: {
    height: 112,
    width: 112,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.main,
  },
  wrapper: {
    shadowColor: colors.defaultBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bodyText: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
  fullName: { fontWeight: fonts.weight.medium, fontFamily: fonts.family.medium, paddingTop: 12 },
  emailAddress: { fontWeight: fonts.weight.light, fontFamily: fonts.family.light },
  logoutView: {
    backgroundColor: colors.lightGray,
    height: 117,
    flexDirection: 'row',
    paddingLeft: 40,
    alignItems: 'center',
    marginLeft: 5,
    paddingRight: 10,
  },
  logout: {
    color: colors.gray,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.light,
    fontFamily: fonts.family.light,
  },
});
