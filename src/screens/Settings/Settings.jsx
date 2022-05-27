import React from 'react';
import { SafeAreaView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import LogOutIcon from 'assets/icons/log-out.svg';
import Text from 'components/Text';
import colors from 'themes/colors';
import styles from './Settings.styles';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Settings = ({ parentComponentId }) => {
  return (
    <SafeAreaView>
      <View style={{ height: SCREEN_HEIGHT, backgroundColor: colors.main }}>
        <View style={styles.drawerHeader}>
          <View style={styles.wrapper}>
            <Image style={styles.image} source={require('assets/images/presignup-one.png')} />
          </View>
          <Text style={styles.fullName}>Savana Nguyen</Text>
          <Text style={styles.emailAddress}>savanguyen@adculture.com</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Text style={styles.subText}>About African books.com</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.subText}>Preferences</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.subText}>Order history</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.subText}>About African books.com</Text>
          </View>
        </View>
        <View style={styles.logoutView}>
          <View style={styles.icon}>
            <LogOutIcon />
          </View>
          <TouchableOpacity>
            <Text style={styles.logout}>Signout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
