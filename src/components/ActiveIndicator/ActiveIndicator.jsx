import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as RNText, ViewPropTypes } from 'react-native';

import Text from 'components/Text';

import colors from 'themes/colors';

import { CARD_STATUSES } from 'helpers/constants';

import styles from './ActiveIndicator.styles';

function ActiveIndicator({ status, isLight, indicatorStyle, style, textStyle, removingDate }) {
  let color;
  let text;
  switch (status) {
    case CARD_STATUSES.ACTIVE:
      color = colors.active;
      text = 'Active';
      break;
    case CARD_STATUSES.ARRIVING:
      color = colors.arriving;
      text = 'Arriving soon';
      break;
    case CARD_STATUSES.PROCESSING:
      color = colors.processing;
      text = 'Processing';
      break;
    case CARD_STATUSES.FROZEN:
      color = colors.frozen;
      text = 'Frozen';
      break;
    case CARD_STATUSES.DISABLED:
      color = colors.frozen;
      text = 'Disabled';
      break;
    case CARD_STATUSES.DELETED:
      color = colors.black;
      text = 'Removed';
      break;
    default:
      break;
  }
  return (
    <View style={[styles.indicatorContainer, style]}>
      {removingDate ? (
        <Text style={styles.removingDateText}>{`Available till ${removingDate}`}</Text>
      ) : (
        <>
          <View style={[{ ...styles.indicator, backgroundColor: color }, indicatorStyle]} />
          <Text style={[isLight ? styles.isLight : styles.text, textStyle]}>{text}</Text>
        </>
      )}
    </View>
  );
}

ActiveIndicator.propTypes = {
  status: PropTypes.oneOf(Object.values(CARD_STATUSES)),
  isLight: PropTypes.bool,
  style: ViewPropTypes.style,
  indicatorStyle: ViewPropTypes.style,
  textStyle: RNText.propTypes.style,
  removingDate: PropTypes.string,
};

ActiveIndicator.defaultProps = {
  status: CARD_STATUSES.ACTIVE,
  isLight: false,
  style: {},
  indicatorStyle: {},
  textStyle: {},
  removingDate: null,
};

export default ActiveIndicator;
