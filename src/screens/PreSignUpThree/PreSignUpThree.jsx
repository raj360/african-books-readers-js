import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'components/Button';
import Text from 'components/Text';
import styles from './PreSignUpThree.styles';

function PreSignUpThree() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('assets/images/presignup-three.png')}
      style={styles.container}
      fadeDuration={300}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.6)']}
        style={styles.content}
      >
        <View style={{ flex: 1 }}>
          <Image style={styles.logo} source={require('assets/images/adaptive-icon.png')} />
          <Text style={styles.title}>African Books in the Palm of your Hand</Text>
          <Text style={styles.text}>Enjoy your books casually wherver and whenever you want</Text>

          <Button
            onPress={() => navigation.navigate('LogInApp')}
            buttonStyles={styles.button}
            title="Get Started"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default PreSignUpThree;
