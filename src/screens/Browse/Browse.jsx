import React, { useState, useCallback, useMemo } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import SidbarWrapper from 'components/SidebarWrapper';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import SearchInput from 'components/SeacrhInput';
import ReviewItem from 'components/ReviewItem';
import MenuIcon from 'assets/icons/menu.svg';
import GridIcon from 'assets/icons/grid.svg';
import ListIcon from 'assets/icons/list.svg';

import colors from 'themes/colors';
import Text from 'components/Text';
import useInterval from 'helpers/useInterval';
import styles from './Browse.styles';

function Browse(props) {
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
          data={inputValue ? absoluteList : items}
          itemDimension={105}
          fixed
          spacing={5}
          renderItem={({ item }) => <ReviewItem {...item} />}
        />
      );
    }
  }, [inputValue, items]);

  const onPress = () => {
    RNNDrawer.showDrawer({
      component: {
        name: 'CustomDrawer',
      },
    });
  };

  return (
    <SidbarWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          left={
            <TouchableOpacity onPress={onPress}>
              <MenuIcon />
            </TouchableOpacity>
          }
          title="Browse"
        />
        <DismissKeyboard>
          <View style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <View style={styles.searchInput}>
                <SearchInput value={inputValue} onChangeText={setInputValue} />
              </View>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row' }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selections.map(({ name, isSelected }, index) => (
                  <TouchableOpacity
                    onPress={() => pressSelection(name)}
                    key={`${index + 1}`}
                    style={[
                      styles.filterTextContainer,
                      isSelected || { backgroundColor: colors.main },
                    ]}
                  >
                    <Text style={[styles.filterText, isSelected && { color: colors.main }]}>
                      {`${name.toString()}`}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.sortOptions}>
              <TouchableOpacity style={{ paddingTop: 5, paddingRight: 5 }}>
                <ListIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <GridIcon />
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <ActivityIndicator style={{ padding: 20 }} size="large" color={colors.primary} />
            ) : (
              content
            )}
          </View>
        </DismissKeyboard>
      </SafeAreaView>
    </SidbarWrapper>
  );
}

export default Browse;
