import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity, StatusBar, Platform, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Header from 'components/Header';

import BackArrowIcon from 'assets/icons/chevron-left.svg';

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

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent />
      </View>
      <Header
        left={
          <TouchableOpacity
            // style={{ padding: 10, paddingLeft: 0 }}
            // activeOpacity={0.7}
            onPress={onBackNavigation}
          >
            <BackArrowIcon />
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
    </>
  );
}

export default Browse;