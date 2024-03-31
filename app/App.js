import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Image} from 'react-native';
import SingInScreen from './src/screens/SingInScreen';
import Logo from './assets/adaptive-icon.png'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SingInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
