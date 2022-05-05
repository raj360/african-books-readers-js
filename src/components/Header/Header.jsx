import React from 'react';
import { View, Text } from 'react-native';

import styles from './Header.styles';

const Header = ({
  left,
  title,
  right,
  containerStyle,
  titleStyle,
  rightStyle,
  leftStyle,
  content,
  numberOfLines = 1,
  isHome = false,
  center,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {content || (
        <>
          {left ? (
            <View style={[styles.left, leftStyle]}>{left}</View>
          ) : (
            <View style={[styles.left, leftStyle]} />
          )}
          <View style={styles.center}>
            {isHome ? (
              center
            ) : (
              <Text numberOfLines={numberOfLines} style={[styles.title, titleStyle]}>
                {title}
              </Text>
            )}
          </View>
          {right && <View style={[styles.right, rightStyle]}>{right}</View>}
        </>
      )}
    </View>
  );
};

export default Header;
