import { Platform } from 'react-native';

const family = {
  base: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
};

const size = {
  great: 56,
  huge: 46,
  big: 40,
  large: 36,
  h1: 32,
  h2: 28,
  price: 24,
  heading: 38,
  title: 36,
  h3: 22,
  h4: 20,
  medium: 18,
  regular: 16,
  small: 14,
  caption: 12,
  tiny: 10,
  smallest: 8,
};

const weight = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '600',
  bold: '700',
};

const lineHeight = {
  huge: 58,
  big: 40,
  large: 36,
  medium: 32,
  regular: 24,
  small: 20,
  caption: 18,
};

export default {
  family,
  size,
  weight,
  lineHeight,
};
