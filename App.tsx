import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider as PaperPrvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/app/store';
import Navigation from './src/navigation/index';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReduxProvider store={store}>
      <PaperPrvider>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navigation />
        </NavigationContainer>
      </PaperPrvider>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
});

export default App;
