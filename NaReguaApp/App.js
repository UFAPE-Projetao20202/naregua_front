/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Route from './routes/route';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#ECECEC',
    height: '100%',
    width:'100%'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Route />
    </SafeAreaView>
  );
};

export default App;
