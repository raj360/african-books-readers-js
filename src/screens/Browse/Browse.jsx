import React, { useState } from 'react';
import { TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import SearchInput from 'components/SeacrhInput';

import MenuIcon from 'assets/icons/menu.svg';

import colors from 'themes/colors';
import Text from 'components/Text';
import styles from './Browse.styles';

function Browse() {
  const [inputValue, setInputValue] = useState('');
  const filters = [
    { name: 'By Genre', isSelected: true },
    { name: 'By Author', isSelected: false },
    { name: 'By Region', isSelected: false },
    { name: 'By Language', isSelected: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        left={
          <TouchableOpacity>
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
              {filters.map(({ name, isSelected }, index) => (
                <TouchableOpacity
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
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
}

export default Browse;
