import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CircleSnail } from 'react-native-progress';
import { RNNDrawer, SideMenuView } from 'react-native-navigation-drawer-extension';
import colors from 'themes/colors';
import ReviewItem from 'components/ReviewItem';
import Header from 'components/Header';
import MenuIcon from 'assets/icons/menu.svg';
import HomeLogoIcon from 'assets/images/home-logo.svg';
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
            componentBackgroundColor: '#80FFFFFF.',
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
          <Header
            left={
              <TouchableOpacity
                style={{ padding: 10, paddingLeft: 0 }}
                activeOpacity={0.7}
                onPress={onPress}
              >
                <MenuIcon />
              </TouchableOpacity>
            }
            center={<HomeLogoIcon />}
            isHome
            right={
              <Image style={styles.logo} source={require('assets/images/presignup-one.png')} />
            }
          />

          <View style={styles.headerView}>
            <Text style={styles.headerCaption}>Continue reading</Text>
            <View style={styles.headerViewCard}>
              <Image style={styles.sideImage} source={require('assets/images/thinking-slow.png')} />
              <View style={{ padding: 5 }}>
                <Text style={styles.bookName}>Thinking</Text>
                <Text style={styles.author}>Daniel Kahneman</Text>
              </View>
            </View>
          </View>
          {/* <ReviewItem /> */}
          {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
        </ScrollView>
      </SafeAreaView>
    </SideMenuView>
  );
}

export default Home;
