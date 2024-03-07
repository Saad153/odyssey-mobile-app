import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from '../Screens/Login';
import { useFonts } from 'expo-font';
import registerNNPushToken from 'native-notify';

export default function App() {

  registerNNPushToken(20066, '6QD0cTOyCmXeUb7Q6okftL');
  const [fontsLoaded, fontError] = useFonts({
    'Proxim': require('../assets/fonts/FontsFree-Net-ProximaNova-Regular.ttf'),
    'ProximaBold': require('../assets/fonts/FontsFree-Net-Proxima-Nova-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});