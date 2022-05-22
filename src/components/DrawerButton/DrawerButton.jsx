import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from 'components/Text';
import styles from './DrawerButton.styles';
import { navigate } from 'helpers/rootNavigation';

const DrawerButton = ({ name, component, parentComponentId, icon, routes, isRoute }) => {
  const [routerObject, setRouterObject] = useState({ name: '', param: {} });

  const onDrawerItemPressed = useCallback((test) => {
    console.log({ test });
    // navigate(routerObject.name, routerObject.param);
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
