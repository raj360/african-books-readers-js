import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text, ImageBackground, View, Alert, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import BackArrowIcon from 'assets/icons/chevron-left.svg';
import Button from 'components/Button';
import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import Input from 'components/Input';

import styles from './SignUpApp.styles';

function SignUpApp({ route }) {
  const navigation = useNavigation();

  const onPressSignUp = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

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
          <View style={{ paddingHorizontal: 39 }}>
            <Text style={styles.title}>Welcome User</Text>
            <Text style={styles.subTitle}>Sign up to join</Text>

            <Input containerStyle={styles.input} label="Username" />
            <Input containerStyle={styles.input} label="Password" />

            <Text style={styles.forgetPassword}>Forgot password?</Text>

            <Button onPress={onPressSignUp} title="Sign Up" />
          </View>
        </View>
      </DismissKeyboard>
      <View style={styles.buttonContainer}>
        <Text style={styles.bottomText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogInApp')}>
          <Text style={[styles.bottomText, styles.bold]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default SignUpApp;
