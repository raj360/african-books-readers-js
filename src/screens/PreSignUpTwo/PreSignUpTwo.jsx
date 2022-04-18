import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'components/Button';
import Text from 'components/Text';
import styles from './PreSignUpTwo.styles';

function PreSignUpTwo() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('assets/images/presignup-two.png')}
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
          <Text style={styles.title}>From the best authors</Text>
          <Text style={styles.text}>
            Only the best and selected authors we present to your satisfaction
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('LogInApp')}>
            <Text style={styles.textButton}>Skip</Text>
          </TouchableOpacity>

          <Button
            onPress={() => navigation.navigate('PreSignUpThree')}
            buttonStyles={styles.button}
            title="Next"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default PreSignUpTwo;
