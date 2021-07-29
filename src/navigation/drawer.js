//import liraries
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/home';
import Search from '../screens/search';
import { DrawerContent } from '../screens/drawercontent';
const Drawer = createDrawerNavigator();

// create a component
const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName=""
      headerMode={false}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search}  />
    </Drawer.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Main;
