import React, { useState, useCallback, useMemo } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import Header from 'components/Header';
import ReviewItem from 'components/ReviewItem';
import MenuIcon from 'assets/icons/menu.svg';
import GridIcon from 'assets/icons/grid.svg';
import ListIcon from 'assets/icons/list.svg';
import ChevronDown from 'assets/icons/chevron-down.svg';

import colors from 'themes/colors';
import Text from 'components/Text';
import useInterval from 'helpers/useInterval';
import styles from './Favorite.styles';

function Favorite() {
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('By Genre');
  const [isLoading, setIsloading] = useState(false);
  const [selections, setSelections] = useState([
    { name: 'By Genre', isSelected: true },
    { name: 'By Author', isSelected: false },
    { name: 'By Region', isSelected: false },
    { name: 'By Language', isSelected: false },
  ]);

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
  ]);

  useInterval(() => {
    setIsloading(false);
  }, 2000);

  const pressSelection = useCallback((selected) => {
    setActiveFilter(selected);
    setIsloading(true);
    setSelections((selections) => {
      return selections.map(({ name }) => {
        return name === selected ? { name, isSelected: true } : { name, isSelected: false };
      });
    });
  }, []);

  // eslint-disable-next-line consistent-return
  const content = useMemo(() => {
    if (items) {
      const absoluteList = items.filter((item) => {
        const regex = new RegExp(`${inputValue}`, 'gi');
        return item.title.match(regex) || item.author.match(regex);
      });
      if (!absoluteList?.length) {
        return <Text style={styles.noSearchText}>Your search did not match any Book.</Text>;
      }

      return (
        <FlatGrid
          itemDimension={115}
          data={inputValue ? absoluteList : items}
          fixed
          spacing={10}
          renderItem={({ item }) => <ReviewItem {...item} />}
        />
      );
    }
  }, [inputValue, items]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        left={
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        }
        title="My Favorite"
      />
      <View style={styles.sortLabel}>
        <View
          style={[styles.headerTextContainer, { justifyContent: 'flex-start', paddingLeft: 30 }]}
        >
          <Text style={styles.text}>Sort By</Text>
          <ChevronDown />
        </View>

        <View style={[styles.sortIcons]}>
          <TouchableOpacity style={styles.iconFeel}>
            <ListIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <GridIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container} contentContainerStyle={styles.content}>
        {isLoading ? (
          <ActivityIndicator style={{ padding: 20 }} size="large" color={colors.primary} />
        ) : (
          <FlatGrid
            itemDimension={105}
            data={items}
            fixed
            spacing={0}
            renderItem={({ item }) => <ReviewItem {...item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Favorite;
