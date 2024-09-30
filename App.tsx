import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './components/news/Home';
import Detail from './components/news/Detail';
import News from './components/news/News';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({ 
    'OpenSans': require('./assets/fonts/Open_Sans/OpenSans.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'OpenSans', fontSize: 30 }}>Open Sans</Text>
      <Home /> 
      <Detail /> 
      <News />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
