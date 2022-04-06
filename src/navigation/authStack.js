import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthApp from 'screens/AuthApp';
import PreSignUp from 'screens/PreSignUp';
import LogInApp from 'screens/LogInApp';
import SignUpApp from 'screens/SignUpApp';

import colors from 'themes/colors';

const AuthStack = createStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName="AuthApp"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <AuthStack.Screen name="AuthApp" component={AuthApp} />
      <AuthStack.Screen name="PreSignUp" component={PreSignUp} />
      <AuthStack.Screen name="LogInApp" component={LogInApp} />
      <AuthStack.Screen name="SignUpApp" component={SignUpApp} />
    </AuthStack.Navigator>
  );
}

export default AuthScreens;
