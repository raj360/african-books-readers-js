import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'components/Button';
import Text from 'components/Text';
import styles from './PreSignUp.styles';

function PreSignUp() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('assets/images/presignup-one.png')}
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
          <Text style={styles.title}>Discover books you love</Text>
          <Text style={styles.text}>Find millions of books from the genres you love </Text>

          <TouchableOpacity onPress={() => navigation.navigate('LogInApp')}>
            <Text style={styles.textButton}>Skip</Text>
          </TouchableOpacity>

          <Button
            onPress={() => navigation.navigate('PreSignUpTwo')}
            buttonStyles={styles.button}
            title="Next"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

export default PreSignUp;
