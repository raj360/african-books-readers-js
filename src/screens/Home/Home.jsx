import React, { useMemo, useState } from 'react';
import { Rating } from 'react-native-ratings';
import { ScrollView, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import { CircleSnail } from 'react-native-progress';

import colors from 'themes/colors';
import ReviewItem from 'components/ReviewItem';
import styles from './Home.styles';

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
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
