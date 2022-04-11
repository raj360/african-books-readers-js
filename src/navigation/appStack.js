import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'assets/icons/tabBar/home.svg';
import BookIcon from 'assets/icons/tabBar/book.svg';
import headPhonesIconIcon from 'assets/icons/tabBar/headphones.svg';
import SearchIcon from 'assets/icons/tabBar/search.svg';
import HeartIcon from 'assets/icons/tabBar/heart.svg';

import * as RootNavigation from 'helpers/rootNavigation';

import Home from 'screens/Home';
import Browse from 'screens/Browse';

import colors from 'themes/colors';
import commonStyles from 'themes/commonStyles';

import TabBarIcon from 'components/TabBarIcon';

const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreens() {
  //   const user = useSelector(userSelectors.getUserData);

  const initialRouteName = 'Home';

  return (
    <HomeStack.Navigator
      initialRouteName={initialRouteName}
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="EnterCodeHelper" component={EnterCodeHelper} /> */}
    </HomeStack.Navigator>
  );
}

function BrowseScreens() {
  return (
    <AccountStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <AccountStack.Screen name="Browse" component={Browse} />
    </AccountStack.Navigator>
  );
}

function Tabs() {
  //   const user = useSelector(userSelectors.getUserData);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: Platform.OS === 'android',
        activeTintColor: colors.tabBarActive,
        inactiveTintColor: colors.tabBarInactive,
        style: commonStyles.tabBar,
        tabStyle: commonStyles.tab,
        labelStyle: commonStyles.labelStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (icon) => <TabBarIcon icon={HomeIcon} focused={icon.focused} />,
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreens}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: (icon) => <TabBarIcon icon={SearchIcon} focused={icon.focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

function AppScreens() {
  //   const dispatch = useDispatch();
  //   const user = useSelector(userSelectors.getUserData);

  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
      initialRouteName="AppLoader"
    >
      {/* <TABS> */}
      <AppStack.Screen name="Tabs" component={Tabs} />
      {/* <TABS /> */}

      {/* Screens without tabs */}

      {/* <AppStack.Screen name="SubscriptionPaymentEdit" component={SubscriptionPaymentEdit} /> */}
    </AppStack.Navigator>
  );
}

export default AppScreens;
