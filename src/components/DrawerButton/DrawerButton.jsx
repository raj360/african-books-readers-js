import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import Text from 'components/Text';
import styles from './DrawerButton.styles';

/**
 * A workaround to avoid pushing
 * the same screen multiple times.
 *
 * For details, check:
 * https://github.com/aspect-apps/react-native-navigation-drawer-extension/issues/31
 */

/**
 * We set this to HomePage because,
 * in this project, HomePage
 * is the initial component.
 */
let lastPageName = 'com.africansbooks.App';
const CurrentComponentName = 'CustomDrawer';

Navigation.events().registerComponentDidAppearListener((event) => {
  if (event.componentName !== CurrentComponentName) {
    lastPageName = event.componentName;
  }
});

const DrawerButton = ({ name, component, parentComponentId, icon, routes, isRoute }) => {
  // const settingsRoute = routes.pop();
  console.log({ routes });
  const handleOpenPage = () => {
    RNNDrawer.dismissDrawer();

    if (lastPageName === component) {
      return;
    }

    Navigation.push(parentComponentId, {
      component: {
        name: component,
      },
    });
  };
  // onPress={handleOpenPage}
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <>
        <View style={styles.buttonContainer}>
          {isRoute ? (
            <Text style={styles.buttonText}>{name}</Text>
          ) : (
            <TouchableOpacity>
              {/* routes[routes.length - 1].name */}
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          )}
          <View>
            {routes.map(({ path, name, params }, index) => (
              <TouchableOpacity key={`${index + 2}`}>
                <Text style={styles.subText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </>
    </View>
  );
};

export default DrawerButton;
