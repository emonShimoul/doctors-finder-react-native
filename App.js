import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Doctors from './Components/Doctors';
import Home from './Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!</Text>
      <Text>Helloooo!!</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/"><Text>Home</Text></Link>
        <Link to="/doctors"><Text>Doctors</Text></Link>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
