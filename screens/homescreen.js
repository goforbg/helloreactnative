import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
 

const HomeScreen = (props) => {
    return (<TouchableOpacity onPress = {() => {props.navigation.navigate('List')}}>
        <Text style = {styles.titleTextStyle} > Click me for List Screen </Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    titleTextStyle: {
        fontSize: 50
    }
});

export default HomeScreen;