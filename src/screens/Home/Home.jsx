import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { CircleSnail } from 'react-native-progress';
import { RNNDrawer, SideMenuView } from 'react-native-navigation-drawer-extension';
import colors from 'themes/colors';
import ReviewItem from 'components/ReviewItem';
import Text from 'components/Text';
import styles from './Home.styles';

function Home({ route, componentId }) {
  const [pageLoading, setPageLoading] = useState(true);

  if (!pageLoading) {
    return (
      <View style={styles.pageLoading}>
        <CircleSnail size={70} color={colors.primary} />
      </View>
    );
  }

  const onPress = () => {
    RNNDrawer.showDrawer({
      component: {
        name: 'CustomDrawer',
        passProps: {
          animationOpenTime: 300,
          animationCloseTime: 300,
          direction: 'left',
          dismissWhenTouchOutside: true,
          fadeOpacity: 0.6,
          drawerScreenWidth: '75%' || 445,
          drawerScreenHeight: '100%' || 700,
          parentComponentId: componentId,
          style: {
            backgroundColor: 'white',
          },
        },
        options: {
          layout: {
            componentBackgroundColor: 'black',
          },
        },
      },
    });
  };

  return (
    <SideMenuView
      style={{ flex: 1 }} // Styles the view
      drawerName="CustomDrawer"
      direction="left"
      passProps={{
        animationOpenTime: 300,
        animationCloseTime: 300,
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.6,
        drawerScreenWidth: '75%' || 445,
        drawerScreenHeight: '100%' || 700,
        parentComponentId: componentId,
        style: {
          backgroundColor: 'white', // Styles the drawer container
        },
      }}
      options={{
        layout: {
          componentBackgroundColor: 'transparent',
        },
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.statusBar}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <ReviewItem />
          <TouchableOpacity onPress={() => onPress()}>
            <Text>Testing</Text>
          </TouchableOpacity>
          {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
        </ScrollView>
      </SafeAreaView>
    </SideMenuView>
  );
}

export default Home;
