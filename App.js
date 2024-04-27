import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigation/TabNavigation';
import * as Location from 'expo-location';
import {useFonts} from 'expo-font'
import { useEffect, useState } from 'react';
import { UserLocationContext } from './App/Context/UserLocationContext';

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
  //   'raleway-bold': require('./assets/fonts/Raleway-SemiBold.ttf')
  // });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <UserLocationContext.Provider 
      value={{location,setLocation}}>
      <NavigationContainer>
        <TabNavigation></TabNavigation>
      </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
