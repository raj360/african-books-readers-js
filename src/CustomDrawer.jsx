import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import DrawerButton from 'components/DrawerButton';
import BookReaderIcon from 'assets/icons/book-reader.svg';
import BrowserIcon from 'assets/icons/browser.svg';
import ListeningIcon from 'assets/icons/listening.svg';
import LogOutIcon from 'assets/icons/log-out.svg';
import SettingsIcon from 'assets/icons/settings.svg';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

import fonts from 'themes/fonts';
import colors from 'themes/colors';

const styles = StyleSheet.create({
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
  fullName: { fontWeight: fonts.weight.medium, paddingTop: 12, fontFamily: fonts.family.medium },
  emailAddress: { fontWeight: fonts.weight.light },
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
    fontFamily: fonts.family.base,
  },
  icon: { paddingRight: 10, margin: 5 },
});

const Buttons = [
  {
    id: 1,
    name: 'READ',
    component: 'HomePage',
    icon: <BookReaderIcon />,
    routes: ['My eBooks'],
  },
  {
    id: 2,
    name: 'LISTEN',
    component: 'Page1',
    icon: <ListeningIcon />,
    routes: ['My Audio Books'],
  },
  {
    id: 3,
    name: 'BROWSE',
    component: 'Page2',
    icon: <BrowserIcon />,
    routes: ['By Genre', 'By Author', 'By Region', 'By language'],
  },
  {
    id: 4,
    name: 'SETTINGS',
    component: 'AnotherPage',
    icon: <SettingsIcon />,
    routes: [],
  },
];

const CustomDrawer = ({ parentComponentId }) => {
  return (
    <SafeAreaView>
      <View style={{ height: SCREEN_HEIGHT, backgroundColor: colors.lightGray }}>
        <View style={styles.drawerHeader}>
          <View style={styles.wrapper}>
            <Image style={styles.image} source={require('assets/images/presignup-one.png')} />
          </View>
          <Text style={styles.fullName}>Savana Nguyen</Text>
          <Text style={styles.emailAddress}>savanguyen@adculture.com</Text>
        </View>
        {Buttons.map((button) => {
          return (
            <DrawerButton
              key={button.id}
              component={button.component}
              name={button.name}
              parentComponentId={parentComponentId}
              icon={button.icon}
              routes={button.routes}
            />
          );
        })}
        <View style={styles.logoutView}>
          <View style={styles.icon}>
            <LogOutIcon />
          </View>
          <Text style={styles.logout}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
