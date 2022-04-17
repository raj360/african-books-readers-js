import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'assets/icons/tabBar/home.svg';
import BookIcon from 'assets/icons/tabBar/book.svg';
import headPhonesIcon from 'assets/icons/tabBar/headphones.svg';
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
        name="Browse"
        component={BrowseScreens}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={SearchIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
      <Tab.Screen
        name="eBook"
        component={BrowseScreens}
        options={{
          tabBarLabel: 'eBook',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={BookIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={HomeIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio"
        component={BrowseScreens}
        options={{
<<<<<<< HEAD:src/navigation/appStack.jsx
          tabBarLabel: 'audio',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={headPhonesIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={BrowseScreens}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={HeartIcon} focused={icon.focused} fill={icon.color} />
          ),
=======
          tabBarLabel: 'Browse',
          tabBarIcon: (icon) => <TabBarIcon icon={SearchIcon} focused={icon.focused} />,
>>>>>>> main:src/navigation/appStack.js
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
