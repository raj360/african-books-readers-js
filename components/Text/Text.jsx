import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

import styles from './Text.styles';

function Text({ children, style, ...rest }) {
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: RNText.propTypes.style,
};

Text.defaultProps = {
  children: null,
  style: null,
};

export default Text;
