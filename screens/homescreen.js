import React from 'react';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
 

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.button}>
                <Button title="Click me for Components Screen" onPress = {() => {navigation.navigate('Components')}}/>
            </View>
            <View style = {styles.button}>
                <Button title="Click me for List Screen" onPress = {() => {navigation.navigate('List')}}/>
            </View>
            <View style = {styles.button}>
                <Button title="Click me for Image Screen" onPress = {() => {navigation.navigate('ImageScreen')}}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    button : {
        marginBottom: 10
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10
        },      

    titleTextStyle: {
        fontSize: 50
    }
    
});

export default HomeScreen;