import React, { useMemo, useState } from 'react';
import { Rating } from 'react-native-ratings';
import { ScrollView, View, Text, Platform, StatusBar, Image } from 'react-native';
import { CircleSnail } from 'react-native-progress';

import colors from 'themes/colors';
import styles from './Home.styles';
import ReviewItem from 'components/ReviewItem';

function Home({ route }) {
  const [pageLoading, setPageLoading] = useState(true);

  if (!pageLoading) {
    return (
      <View style={styles.pageLoading}>
        <CircleSnail size={70} color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ReviewItem />

        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </>
  );
}

export default Home;
