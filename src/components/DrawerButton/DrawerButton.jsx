import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from 'components/Text';
import { navigate } from 'helpers/rootNavigation';
import styles from './DrawerButton.styles';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';

const DrawerButton = ({ name, component, parentComponentId, icon, routes, isRoute }) => {
  const onDrawerItemPressed = useCallback((name, param) => {
    RNNDrawer.dismissDrawer();
    navigate({ name, param });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <>
        <View style={styles.buttonContainer}>
          {isRoute ? (
            <Text style={styles.buttonText}>{name}</Text>
          ) : (
            <TouchableOpacity onPress={() => onDrawerItemPressed(routes[routes.length - 1].path)}>
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          )}
          <View>
            {routes.map(({ path, name, param }, index) => (
              <TouchableOpacity
                onPress={() => onDrawerItemPressed(path, param)}
                key={`${index + 2}`}
              >
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
