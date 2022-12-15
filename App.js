import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!</Text>
      <Text>Hello!!</Text>
      <StatusBar style="auto" />
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
