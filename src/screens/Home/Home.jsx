import React, { useState } from 'react';
import { ScrollView, View, Platform, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { CircleSnail } from 'react-native-progress';
import { RNNDrawer, SideMenuView } from 'react-native-navigation-drawer-extension';
import colors from 'themes/colors';
import Header from 'components/Header';
import MenuIcon from 'assets/icons/menu.svg';
import HomeLogoIcon from 'assets/images/home-logo.svg';
import Text from 'components/Text';
import ChevronRight from 'assets/icons/chevron-right.svg';
import fonts from 'themes/fonts';
import styles from './Home.styles';

const ebooks = [
  require('assets/images/aminatta.png'),
  require('assets/images/awalk.png'),
  require('assets/images/water.png'),
  require('assets/images/agirl.png'),
  require('assets/images/awalk.png'),
];

const audios = [
  require('assets/images/half.png'),
  require('assets/images/people.png'),
  require('assets/images/sacrament.png'),
  require('assets/images/fugitive.png'),
  require('assets/images/people.png'),
];

const authors = [
  {
    image: require('assets/images/presignup-one.png'),
    name: "Ngungi wa Thiong'o",
  },
  {
    image: require('assets/images/presignup-one.png'),
    name: 'Ben Okri',
  },
  {
    image: require('assets/images/presignup-one.png'),
    name: 'Marie Ndiaye',
  },
  {
    image: require('assets/images/presignup-one.png'),
    name: 'Chinua Achebe',
  },
  {
    image: require('assets/images/presignup-one.png'),
    name: 'Naguib Mahfouz',
  },
];

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
          right={<Image style={styles.logo} source={require('assets/images/presignup-one.png')} />}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerView}>
            <Text style={styles.headerCaption}>Continue reading</Text>
            <TouchableOpacity>
              <View style={styles.headerViewCard}>
                <Image
                  style={styles.sideImage}
                  source={require('assets/images/thinking-slow.png')}
                />
                <View style={{ padding: 5 }}>
                  <Text style={styles.bookName}>Thinking</Text>
                  <Text style={styles.author}>Daniel Kahneman</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.nestedListView}>
            {/* My ebooks */}
            <View style={styles.viewHeaderContainer}>
              <Text style={[styles.headerCaption, { paddingTop: 9 }]}>My ebooks</Text>
              <TouchableOpacity>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <ChevronRight />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {ebooks.map((book, index) => (
                  <TouchableOpacity key={`${index + 1}`}>
                    <Image style={styles.bookImage} source={book} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* My audios */}
            <View style={styles.viewHeaderContainer}>
              <Text style={[styles.headerCaption, { paddingTop: 9 }]}>My audios</Text>
              <TouchableOpacity>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <ChevronRight />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {audios.map((book, index) => (
                  <TouchableOpacity key={`${index + 1}`}>
                    <Image style={styles.bookImage} source={book} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* My authors */}
            <View style={styles.viewHeaderContainer}>
              <Text style={styles.authorCaptions}>My authors</Text>
              <TouchableOpacity>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <ChevronRight />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {authors.map(({ image, name }, index) => (
                  <TouchableOpacity key={`${index + 1}`}>
                    <View style={styles.authorContainer}>
                      <Image style={styles.authorImage} source={image} />
                      <Text style={styles.authorName}>{name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
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
