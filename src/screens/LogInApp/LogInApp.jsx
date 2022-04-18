import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import BackArrowIcon from 'assets/icons/chevron-left.svg';
import Button from 'components/Button';
import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import Input from 'components/Input';

import styles from './LogInApp.styles';

function LogInApp({ route }) {
  const navigation = useNavigation();

  const onPressSignUp = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
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
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subTitle}>Sign in to continue</Text>

            <Input containerStyle={styles.input} label="Username" />
            <Input containerStyle={styles.input} label="Password" />

            <Text style={styles.forgetPassword}>Forgot password?</Text>

            <Button onPress={onPressSignUp} title="Sign In" />
          </View>
        </View>
      </DismissKeyboard>
      <View style={styles.buttonContainer}>
        <Text style={styles.bottomText}>Don't have an acount?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpApp')}>
          <Text style={[styles.bottomText, styles.bold]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default LogInApp;
