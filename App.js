import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator(
  {
    Home: Home,
    About: About,
    Contact:Contact
  },
  {
    initialRouteName: "Home",
  }
);
const App = createAppContainer(AppNavigator);

export default App;

























//https://reactnavigation.org/docs/en/navigating.html