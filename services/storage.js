import AsyncStorage from '@react-native-community/async-storage';

import { STORAGE_KEYS } from './constants';

export function getItem(key) {
  return AsyncStorage.getItem(key);
}

export function setItem(key, value) {
  return AsyncStorage.setItem(key, value);
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export async function clear() {
  const toppedUp = await getItem(STORAGE_KEYS.TOPPED_UP);
  let values = Object.values(STORAGE_KEYS);
  if (toppedUp) {
    values = values.filter((item) => item !== STORAGE_KEYS.TOPPED_UP);
  }
  return AsyncStorage.multiRemove(values);
}
