// import { registerRootComponent } from 'expo';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';

import App from './src/App';
import CustomDrawer from './src/CustomDrawer';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);
Navigation.registerComponent('CustomDrawer', () => RNNDrawer.create(CustomDrawer));
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
