import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native';

const AppStatusBar = ({ backgroundColor, ...props }) => {
  if (Platform.OS === 'android') {
    return <StatusBar backgroundColor={backgroundColor} {...props} />;
  }
  return (
    <View style={[styles.statusBar, backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default AppStatusBar;
