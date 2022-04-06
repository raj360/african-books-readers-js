import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';

import {
  ScrollView,
  View,
  Text,
  Platform,
  RefreshControl,
  Alert,
  StatusBar,
  AppState,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CircleSnail } from 'react-native-progress';
import analytics from '@react-native-firebase/analytics';

import Header from 'components/Header';
import colors from 'themes/colors';
import styles from './Home.styles';
import useInterval from 'helpers/useInterval';

function Home({ route }) {
  const appState = useRef(AppState.currentState);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setIsTransactionsLoading(true);

    useInterval(() => {
      setIsRefreshing(false);
      setIsTransactionsLoading(false);
    }, 1000);
  }, [dispatch, isSpenderWithoutEmployer]);

  if (pageLoading) {
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
        refreshControl={
          <RefreshControl tintColor="#fff" refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </>
  );
}

export default Home;
