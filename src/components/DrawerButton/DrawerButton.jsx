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

const DrawerButton = ({ name, component, parentComponentId, icon, routes }) => {
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
      {routes.length > 0 ? (
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{name}</Text>
          <View>
            {routes.map((route, index) => (
              <TouchableOpacity key={`${index + 2}`}>
                <Text style={styles.subText}>{route}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <TouchableOpacity style={[styles.buttonContainer, { paddingBottom: 48 }]}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DrawerButton;
