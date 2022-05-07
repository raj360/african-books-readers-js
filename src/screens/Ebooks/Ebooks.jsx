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

import colors from 'themes/colors';
import Button from 'components/Button';
import styles from './Ebooks.styles';

function Ebooks({ route, componentId }) {
  const navigation = useNavigation();

  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
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
        title="My ebooks"
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
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <ReviewItem />
            // <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            //   <Text style={styles.itemName}>{item.name}</Text>
            //   <Text style={styles.itemCode}>{item.code}</Text>
            // </View>
          )}
        />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {Platform.OS === 'ios' && <View style={styles.iosBottomScrollBackColor} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Ebooks;
