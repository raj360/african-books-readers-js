import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'assets/icons/tabBar/home.svg';
import BookIcon from 'assets/icons/tabBar/book.svg';
import headPhonesIcon from 'assets/icons/tabBar/headphones.svg';
import SearchIcon from 'assets/icons/tabBar/search.svg';
import HeartIcon from 'assets/icons/tabBar/heart.svg';

import Home from 'screens/Home';
import Browse from 'screens/Browse';
import Ebooks from 'screens/Ebooks';
import Audio from 'screens/Audio';
import Favorite from 'screens/Favorite';
import Settings from 'screens/Settings';

import colors from 'themes/colors';
import commonStyles from 'themes/commonStyles';

import TabBarIcon from 'components/TabBarIcon';

const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreens({ componentId }) {
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
      <HomeStack.Screen name="Home">
        {(props) => <Home {...props} componentId={componentId} />}
      </HomeStack.Screen>
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
function FavoriteScreens() {
  return (
    <AccountStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <AccountStack.Screen name="Favorite" component={Favorite} />
    </AccountStack.Navigator>
  );
}

function EbookScreens() {
  return (
    <AccountStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <AccountStack.Screen name="Ebooks" component={Ebooks} />
    </AccountStack.Navigator>
  );
}
function AudioScreens() {
  return (
    <AccountStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <AccountStack.Screen name="Audio" component={Audio} />
    </AccountStack.Navigator>
  );
}

function Tabs({ componentId }) {
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
        name="Ebooks"
        component={EbookScreens}
        options={{
          tabBarLabel: 'eBooks',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={BookIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={HomeIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      >
        {(props) => <HomeScreens {...props} componentId={componentId} />}
      </Tab.Screen>
      <Tab.Screen
        name="Audio"
        component={AudioScreens}
        options={{
          tabBarLabel: 'Audios',
          tabBarIcon: (icon) => <TabBarIcon icon={headPhonesIcon} focused={icon.focused} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: (icon) => (
            <TabBarIcon icon={HeartIcon} focused={icon.focused} fill={icon.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppScreens({ componentId }) {
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
      <AppStack.Screen name="Tabs">
        {(props) => <Tabs {...props} componentId={componentId} />}
      </AppStack.Screen>
      {/* <TABS /> */}

      {/* Screens without tabs */}
      <AccountStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
  );
}

export default AppScreens;
