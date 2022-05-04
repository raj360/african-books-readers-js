import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from 'navigation';

export default function App({ componentId }) {
  return (
    <SafeAreaProvider>
      <Navigation componentId={componentId} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
