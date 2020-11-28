import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListScreen = () => {
  
  const friends = [
    {name : "Friend #1", age : 15},
    {name : "Friend #2", age : 15},
    {name : "Friend #3", age : 15},
    {name : "Friend #4", age : 15},
    {name : "Friend #5", age : 15},
    {name : "Friend #6", age : 15},
    {name : "Friend #7", age : 15},
    {name : "Friend #8", age : 15},
    {name : "Friend #9", age : 15},
    {name : "Friend #10", age : 15},
    {name : "Friend #11", age : 15},
    {name : "Friend #12", age : 15},
    {name : "Friend #13", age : 15},
    {name : "Friend #14", age : 15},
    {name : "Friend #15", age : 15},
    {name : "Friend #16", age : 15},
    {name : "Friend #17", age : 15},
    {name : "Friend #18", age : 15},
  ]

  return (
    <View>
      <MainList data={friends}/>
      <StatusBar style="auto" />
    </View>
  );


}; 

const MainList = (props) => {
  return (
    <FlatList 
    keyExtractor={(friend) => {
      return friend.name;
    }}
    data = {props.data}
     renderItem={({item}) => {
     return <Text style={styles.headingTextStyle}>{item.name} - Age {item.age}</Text>
     }}/>);
}


const styles = StyleSheet.create({
    textStyle : {
      fontSize : 50
    },
    headingTextStyle : {
      fontSize : 50
    },
  });

export default ListScreen;