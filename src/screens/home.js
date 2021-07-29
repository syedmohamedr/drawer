//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
// create a component
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Icon name="menu" size={24}  onPress={() => navigation.openDrawer()}/>
            <Text>Home</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Home;
