import React, { useState } from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';

import Header from 'components/Header';
import DismissKeyboard from 'components/DismissKeyboard';
import SearchInput from 'components/SeacrhInput';

import MenuIcon from 'assets/icons/menu.svg';

import colors from 'themes/colors';
import styles from './Browse.styles';

function Browse() {
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
              <SearchInput value={inputValue} onChangeText={setInputValue} />
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
}

export default Browse;
