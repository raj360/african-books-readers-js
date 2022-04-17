import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Platform, StatusBar, View } from 'react-native';
import { CircleSnail } from 'react-native-progress';

import colors from 'themes/colors';
import styles from './AppLoader.styles';

function AppLoader() {
  useFocusEffect((data) => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
    }
  });

  return (
    <View style={styles.content}>
      <View style={styles.loader}>
        <CircleSnail size={70} color={colors.primary} />
      </View>
    </View>
  );
}

export default AppLoader;
