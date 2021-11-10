import React from 'react';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';
import { AuthProvider } from './src/contexts/auth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#ECECEC',
    height: '100%',
    width:'100%'
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
