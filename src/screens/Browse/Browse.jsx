import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import SearchInput from 'components/SeacrhInput';

import BackArrowIcon from 'assets/icons/chevron-left.svg';
import MenuIcon from 'assets/icons/menu.svg';

import colors from 'themes/colors';
import Button from 'components/Button';
import styles from './Browse.styles';

function Browse() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

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
              <SearchInput
                style={{ borderColor: colors.main }}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Search"
              />
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
}

export default Browse;
