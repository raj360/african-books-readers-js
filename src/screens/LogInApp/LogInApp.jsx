import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  Text,
  ImageBackground,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

import BackArrowIcon from 'assets/icons/chevron-left.svg';
import Button from 'components/Button';
import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import { validatePhoneNumber, formatePhoneNumber } from 'helpers/validation';

import styles from './LogInApp.styles';

function LogInApp({ route }) {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPressSignUp = useCallback(() => {
    navigation.navigate('PreSignUp');
  }, [navigation]);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ImageBackground source={null} style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <DismissKeyboard keyboardVerticalOffset={-230}>
        <View style={styles.container}>
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
        </View>
      </DismissKeyboard>
    </ImageBackground>
  );
}

export default LogInApp;
