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

import BackArrowIcon from 'assets/icons/chevron-left.svg';
import MenuIcon from 'assets/icons/menu.svg';

import colors from 'themes/colors';
import Button from 'components/Button';
import styles from './Browse.styles';

function Browse() {
  const navigation = useNavigation();
  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
    }
  });

  return (
    <SafeAreaView>
      <Header
        left={
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity activeOpacity={0.7}>
            {/* <MenuVerticleIcon fill={colors.defaultBlack} /> */}
          </TouchableOpacity>
        }
        title="Browse"
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Browse;
