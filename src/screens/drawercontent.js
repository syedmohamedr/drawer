//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign'
// create a component
export function DrawerContent(props) {
  return (
    <View>
      <Drawer.Section style={{backgroundColor:"black",height:"100%"}}>
        <DrawerItem
          onPress={() => props.navigation.navigate('Home')}
          icon={({color, size}) => (
            <AntDesign name="home" size={20} style={{color: '#fff'}} />
          )}
          label="Home"
          labelStyle={{color:"#fff"}}
        />
          <DrawerItem
          onPress={() => props.navigation.navigate('Search')}
          icon={({color, size}) => (
            <AntDesign name="search1" size={20} style={{color: '#fff'}} />
          )}
          label="Advance Search"
          labelStyle={{color:"#fff"}}
        />
      </Drawer.Section>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
