import React, { useCallback } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
  SafeAreaView,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Header from 'components/Header';
import Text from 'components/Text';

import MenuIcon from 'assets/icons/menu.svg';
import PlusIcon from 'assets/icons/plus.svg';
import ChevronDown from 'assets/icons/chevron-down.svg';
import GridIcon from 'assets/icons/grid.svg';
import ListIcon from 'assets/icons/list.svg';

import colors from 'themes/colors';
import Button from 'components/Button';
import styles from './Ebooks.styles';

function Ebooks({ route, componentId }) {
  const navigation = useNavigation();
  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
    }
  });

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView>
      <Header
        left={
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.addText}>Add</Text>
              <PlusIcon />
            </View>
          </TouchableOpacity>
        }
        title="My ebooks"
      />

      <View style={styles.sortLabel}>
        <View
          style={[styles.headerTextContainer, { justifyContent: 'flex-start', paddingLeft: 30 }]}
        >
          <Text style={styles.addText}>Sort By</Text>
          <ChevronDown />
        </View>

        <View style={[styles.headerTextContainer, styles.sortIcons]}>
          <TouchableOpacity style={{ paddingTop: 5, paddingRight: 5 }}>
            <ListIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <GridIcon />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Ebooks;
