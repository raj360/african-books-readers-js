import React, { useCallback, useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
  SafeAreaView,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Header from 'components/Header';
import Text from 'components/Text';
import ReviewItem from 'components/ReviewItem';

import MenuIcon from 'assets/icons/menu.svg';
import PlusIcon from 'assets/icons/plus.svg';
import ChevronDown from 'assets/icons/chevron-down.svg';
import GridIcon from 'assets/icons/grid.svg';
import ListIcon from 'assets/icons/list.svg';

import styles from './Ebooks.styles';

function Ebooks({ route, componentId }) {
  const navigation = useNavigation();

  const [items, setItems] = React.useState([
    {
      author: 'Jennifer Nansubuga',
      title: 'A Girl is A Body Of Water',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/agirl.png'),
    },
    {
      author: 'Alain Mabankou',
      title: 'The Invisible Man',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'Chinua Achebe',
      title: 'Things Fall Apart',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/awalk.png'),
    },
    {
      author: 'AMETHYST',
      title: '#9b59b6',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/half.png'),
    },
    {
      author: 'WET ASPHALT',
      title: '#34495e',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/people.png'),
    },
    {
      author: 'GREEN SEA',
      title: '#16a085',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/thinking-slow.png'),
    },
    {
      author: 'NEPHRITIS',
      title: '#27ae60',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/water.png'),
    },
    {
      author: 'BELIZE HOLE',
      title: '#2980b9',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/sacrament.png'),
    },
    {
      author: 'WISTERIA',
      title: '#8e44ad',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/people.png'),
    },
    {
      author: 'MIDNIGHT BLUE',
      title: '#2c3e50',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'SUN FLOWER',
      title: '#f1c40f',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'CARROT',
      title: '#e67e22',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'ALIZARIN',
      title: '#e74c3c',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'CLOUDS',
      title: '#ecf0f1',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'CONCRETE',
      title: '#95a5a6',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'ORANGE',
      title: '#f39c12',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
    {
      author: 'PUMPKIN',
      title: '#d35400',
      rating: 4,
      reviews: 248,
      imageUrl: require('assets/images/aminatta.png'),
    },
  ]);

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
    }
  });

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView>
      <Header
        left={
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.addText}>Add</Text>
              <PlusIcon />
            </View>
          </TouchableOpacity>
        }
        title="My eBooks"
      />

      <View style={styles.sortLabel}>
        <View
          style={[styles.headerTextContainer, { justifyContent: 'flex-start', paddingLeft: 30 }]}
        >
          <Text style={styles.addText}>Sort By</Text>
          <ChevronDown />
        </View>

        <View style={[styles.headerTextContainer, styles.sortIcons]}>
          <TouchableOpacity style={{ paddingTop: 5, paddingRight: 5 }}>
            <ListIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <GridIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatGrid
          itemDimension={115}
          data={items}
          fixed
          spacing={10}
          renderItem={({ item }) => <ReviewItem {...item} />}
        />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Ebooks;
