import React, { useCallback, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text, ImageBackground, View, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'components/Button';
import Header from 'components/Header';
import BackArrowIcon from 'assets/icons/chevron-left.svg';
import styles from './PreSignUp.styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;

function PreSignUp() {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={null} style={styles.container} fadeDuration={300}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.3)',
          'rgba(0, 0, 0, 0.4)',
          'rgba(0, 0, 0, 0.7)',
          'rgba(0, 0, 0, 0.9)',
        ]}
        style={styles.content}
      >
        <Header
          left={
            <TouchableOpacity
              style={{ padding: 10, paddingLeft: 0 }}
              activeOpacity={0.7}
              onPress={onBackPress}
            >
              <BackArrowIcon fill="#fff" />
            </TouchableOpacity>
          }
        />
        <View></View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default PreSignUp;
