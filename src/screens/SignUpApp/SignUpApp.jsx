import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text, ImageBackground, View, Alert, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import BackArrowIcon from 'assets/icons/chevron-left.svg';

import Button from 'components/Button';
import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';

// import { validatePhoneNumber, formatePhoneNumber } from 'helpers/validation';

import styles from './SignUpApp.styles';

function SignUpApp({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  // require('assets/images/external-home.png')
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

export default SignUpApp;
