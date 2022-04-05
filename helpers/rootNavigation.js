import * as React from 'react';

import { CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();
export const routeNameRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(...args) {
  navigationRef.current?.dispatch({ ...CommonActions.reset(...args) });
}

export function getCurrentRouteName() {
  return navigationRef.current?.getCurrentRoute().name;
}
