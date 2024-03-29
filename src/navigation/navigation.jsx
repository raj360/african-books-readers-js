import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { navigationRef, routeNameRef } from 'helpers/rootNavigation';

import config from 'resources/config';
import AuthScreens from './authStack';
import AppScreens from './appStack';

function AppNavigation(props) {
  const userAuthenticated = true;

  const onNavigationReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onNavigationStateChange = async () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={onNavigationStateChange}
    >
      {userAuthenticated ? <AppScreens {...props} /> : <AuthScreens {...props} />}
    </NavigationContainer>
  );
}

export default AppNavigation;
