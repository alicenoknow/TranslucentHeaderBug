import React from 'react';

import {enableScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens(true);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}
