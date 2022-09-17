import { StatusBar } from 'expo-status-bar';
import {StyleSheet,  Text, View } from 'react-native';
import React  from 'react';
import { TailwindProvider } from 'tailwind-rn/dist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Categories from './components/Categories';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {

 

  return (

    <NavigationContainer> 
     <Provider store={store}>
      <TailwindProvider>
      <Stack.Navigator>
     
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
      
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}


